const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./database')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const livrosRouter = require('./livrosRouter');

app.use('/livros', livrosRouter);

app.listen(3000, () => {

  sequelize.sync({ alter: true })
    .then(() => {
      console.log('Modelo sincronizado com o banco de dados');
    })
    .catch((error) => {
      console.error('Erro ao sincronizar modelo com o banco de dados:', error);
    });
});
