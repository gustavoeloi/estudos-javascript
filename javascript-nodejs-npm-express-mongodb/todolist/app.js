const express = require(`express`);
const mongoose = require('mongoose');
const app = express();
const port = 3000;
require('dotenv').config();

const taskRoutes = require('./routes/tarefas');

app.use(express.urlencoded({extended: true}));

// Conectando ao banco de dados MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtjeijf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
  console.log('Conectado ao banco de dados!')
}).catch((err) => {
  console.log('Erro ao conectar ao banco de dados: ' + err);
})

app.set('view engine', 'ejs');
app.use(taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
})