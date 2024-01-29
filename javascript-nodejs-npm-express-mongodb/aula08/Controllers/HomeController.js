const paginaInicial = (req, res) => {
  res.send(`
  <h1>Página Inicial</h1>
  <p>Utilizando Routes e o padrão MVC</p>
  `);
};

const dataDeHoje = (req, res) => {
  const data = new Date();
  const dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  res.send(`Data de hoje: ${dataFormatada}`);
};

module.exports = {
  paginaInicial,
  dataDeHoje,
};
