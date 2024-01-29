const express = require("express");
const homeController = require("./src/controllers/HomeController");

const routes = express.Router();

routes.get("/", homeController.paginaInicial);

module.exports = routes;
