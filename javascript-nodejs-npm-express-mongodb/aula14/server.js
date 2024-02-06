const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtjeijf.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority`
  )
  .then(() => app.emit("DB Connected"))
  .catch((e) => console.log("Error ao conectador na base de dados " + e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const path = require("path");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret: "",
  store: MongoStore.create({
    mongoUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtjeijf.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority`,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);
app.use(sessionOptions);
app.use(flash());

app.on("DB Connected", () =>
  app.listen(port, () => {
    console.log("Running server");
  })
);
