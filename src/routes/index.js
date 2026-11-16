const express = require("express");
const homeController = require("../controllers/homeController");
const emergenciaController = require("../controllers/emergenciaController");
const authController = require("../controllers/authController");
const aulasController = require("../controllers/aulasController");
const session = require("../auth/session");

const router = express.Router();

const mostrarEmergencia = (slug) => (req, res, next) => {
  req.params.slug = slug;
  return emergenciaController.mostrar(req, res, next);
};

router.get("/", homeController.index);
router.get("/contato", homeController.contato);

["rcp", "convulsao", "queimaduras", "traumas", "cortes", "choque", "afogamento", "desmaio"].forEach(
  (slug) => router.get(`/${slug}`, mostrarEmergencia(slug))
);

router.get("/aulas", session.exigirLogin, aulasController.index);

router.get("/login", authController.paginaLogin);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

router.get("/cadastro", authController.paginaCadastro);
router.post("/cadastro", authController.cadastrar);

module.exports = router;
