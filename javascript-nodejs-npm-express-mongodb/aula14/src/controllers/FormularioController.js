const formularioPagina = (req, res, next) => {
  res.render("formulario");

  console.log(req.session.message);
  next();
};

const reqFormulario = (req, res, next) => {
  const { nome } = req.body;

  res.send(`Olá, ${nome.toUpperCase()}!`);
};

module.exports = {
  formularioPagina,
  reqFormulario,
};
