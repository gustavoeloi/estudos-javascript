const express = require("express");
const homeController = require("./src/controllers/HomeController");
const formularioController = require("./src/controllers/FormularioController");
const confirmMiddleware = require("./src/middlewares/middleware");

const routes = express.Router();

routes.get("/", homeController.paginaInicial);

routes.get(
  "/formulario",
  confirmMiddleware,
  formularioController.formularioPagina
);

routes.post("/formulario", formularioController.reqFormulario);

module.exports = routes;
