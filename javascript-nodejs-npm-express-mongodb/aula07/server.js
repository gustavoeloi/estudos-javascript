const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Olá, Mundo!</h1>");
});

app.get("/teste/:id", (req, res) => {
  const { id } = req.params;
  if (id <= 10) {
    res.send(`<h1>Você está acessando o perfil do usuário ${id}</h1>`);
  } else {
    res.send("ID não encontrado");
  }
});

app.get("/query", (req, res) => {
  const { nome, idade } = req.query;

  if (nome) {
    res.send(
      `<p>Você pesquisou pelo nome ${nome} que tem a idade de ${idade} anos</p>`
    );
  }
});

app.get("/form", (req, res) => {
  res.send(`
  <form action="/" method="POST">
    <label>
      Nome: 
      <input type="text" name="name" />
    </label>  
    <label>
      Idade: 
      <input type="number" name="age" />
    </label> 
    <button type="submit">Enviar</button>
  </form>
  `);
});

app.post("/", (req, res) => {
  const { name, age } = req.body;

  res.send(`Olá, ${name}! você tem ${age} anos de idade`);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
