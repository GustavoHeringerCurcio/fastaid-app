const aulasModel = require("../models/aulasModel");

function index(req, res) {
  res.render("aulas", {
    titulo: "Aulas - Fast Aid",
    usuario: req.usuario,
    aulas: aulasModel.listar(),
  });
}

module.exports = { index };
