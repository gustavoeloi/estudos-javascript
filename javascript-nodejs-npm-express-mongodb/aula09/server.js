const express = require("express");

const app = express();
const port = 3000;
const path = require("path");
const routes = require("./routes");

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(port, () => {
  console.log("Running server");
});
