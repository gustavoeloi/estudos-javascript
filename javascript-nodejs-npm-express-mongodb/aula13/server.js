const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();

const path = require("path");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(port, () => {
  console.log("Running server");
});

require("./database/connection");
