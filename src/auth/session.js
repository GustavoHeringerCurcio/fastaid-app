const crypto = require("crypto");

const COOKIE_NAME = "fastaid_session";
const MAX_AGE_MS = 1000 * 60 * 60 * 8;
const SECRET = process.env.SESSION_SECRET || "fastaid-dev-secret-change-me";

function base64url(valor) {
  return Buffer.from(valor).toString("base64url");
}

function assinar(payload) {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("base64url");
}

function lerCookie(req, nome) {
  const header = req.headers.cookie || "";
  const partes = header.split(";").map((p) => p.trim());

  for (const parte of partes) {
    const separador = parte.indexOf("=");
    if (separador === -1) continue;
    const chave = parte.slice(0, separador);
    if (chave === nome) {
      return decodeURIComponent(parte.slice(separador + 1));
    }
  }

  return null;
}

function criarSessao(usuario) {
  const payload = base64url(
    JSON.stringify({ usuario, exp: Date.now() + MAX_AGE_MS })
  );
  return `${payload}.${assinar(payload)}`;
}

function verificarToken(token) {
  if (!token) return null;

  const separador = token.lastIndexOf(".");
  if (separador === -1) return null;

  const payload = token.slice(0, separador);
  const assinatura = token.slice(separador + 1);
  const esperada = assinar(payload);

  const a = Buffer.from(assinatura);
  const b = Buffer.from(esperada);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  try {
    const dados = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (!dados.exp || dados.exp < Date.now()) return null;
    return dados.usuario;
  } catch (err) {
    return null;
  }
}

function obterSessao(req) {
  const usuario = verificarToken(lerCookie(req, COOKIE_NAME));
  return usuario ? { usuario } : null;
}

function destruirSessao(req) {
  return null;
}

function cookieDeSessao(token) {
  return `${COOKIE_NAME}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${Math.floor(
    MAX_AGE_MS / 1000
  )}`;
}

function cookieDeLogout() {
  return `${COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`;
}

function exigirLogin(req, res, next) {
  const sessao = obterSessao(req);

  if (!sessao) {
    const destino = encodeURIComponent(req.originalUrl || "/aulas");
    return res.redirect(`/login?redirect=${destino}`);
  }

  req.usuario = sessao.usuario;
  return next();
}

module.exports = {
  criarSessao,
  obterSessao,
  destruirSessao,
  cookieDeSessao,
  cookieDeLogout,
  exigirLogin,
};
