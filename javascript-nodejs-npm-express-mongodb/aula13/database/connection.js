const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.dtjeijf.mongodb.net/test?retryWrites=true&w=majority`
  );

  const connection = mongoose.connection;

  connection.on("Error ", () => console.err("Error ao conectar com o MongoDB"));

  connection.on("open", () => console.log("Conectado ao MongoDB com sucesso!"));
};

connect();

module.exports = mongoose;
