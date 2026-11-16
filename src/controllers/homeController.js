const emergenciaModel = require("../models/emergenciasModel");

function index(req, res) {
  res.render("index", {
    titulo: "Fast Aid — Aprenda primeiros socorros",
    emergencias: emergenciaModel.listar(),
  });
}

function contato(req, res) {
  res.render("contato", {
    titulo: "Contato da Equipe - Fast Aid",
  });
}

module.exports = { index, contato };
