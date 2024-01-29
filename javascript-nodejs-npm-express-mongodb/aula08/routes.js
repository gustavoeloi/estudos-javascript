const express = require("express");
const route = express.Router();

const homeController = require("./Controllers/HomeController");

route.get("/", homeController.paginaInicial);
route.get("/data", homeController.dataDeHoje);

module.exports = route;
