const usuarioModel = require("../models/usuarioModel");
const session = require("../auth/session");

function paginaLogin(req, res) {
  res.render("login", { titulo: "Login - Fast Aid" });
}

function paginaCadastro(req, res) {
  res.render("cadastro", { titulo: "Cadastro - Fast Aid" });
}

function login(req, res) {
  const resultado = usuarioModel.autenticar(req.body.email, req.body.senha);
  if (!resultado.ok) {
    return res.status(401).json(resultado);
  }

  const token = session.criarSessao(resultado.usuario);
  res.setHeader("Set-Cookie", session.cookieDeSessao(token));
  return res.json(resultado);
}

function logout(req, res) {
  session.destruirSessao(req);
  res.setHeader("Set-Cookie", session.cookieDeLogout());
  return res.json({ ok: true });
}

function cadastrar(req, res) {
  const resultado = usuarioModel.criar(req.body);
  if (!resultado.ok) {
    return res.status(400).json(resultado);
  }
  return res.status(201).json(resultado);
}

module.exports = { paginaLogin, paginaCadastro, login, logout, cadastrar };
