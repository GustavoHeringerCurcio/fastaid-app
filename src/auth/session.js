const crypto = require("crypto");

const COOKIE_NAME = "fastaid_session";
const MAX_AGE_MS = 1000 * 60 * 60 * 8;

const sessions = new Map();

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

function obterSessao(req) {
  const token = lerCookie(req, COOKIE_NAME);
  if (!token) return null;

  const sessao = sessions.get(token);
  if (!sessao) return null;

  if (sessao.expiraEm < Date.now()) {
    sessions.delete(token);
    return null;
  }

  sessao.expiraEm = Date.now() + MAX_AGE_MS;
  return { token, usuario: sessao.usuario };
}

function criarSessao(usuario) {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, {
    usuario,
    expiraEm: Date.now() + MAX_AGE_MS,
  });
  return token;
}

function destruirSessao(req) {
  const token = lerCookie(req, COOKIE_NAME);
  if (token) sessions.delete(token);
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
