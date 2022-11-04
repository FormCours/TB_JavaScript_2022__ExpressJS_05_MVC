// Chargement des variables d'env
require('dotenv-flow').config();
const { PORT, NODE_ENV } = process.env;

// Les imports
const express = require('express');
const chalk = require('chalk');
const router = require('./routers/index');

// Création du server
const app = express();

// Configuration du server
app.use(express.static('public'))

// Config du moteur de vue
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routing
app.use(router);

// Demarrage du server
app.listen(PORT, () => {
    console.log(chalk.magenta(`Server up on port ${PORT} in mode ${NODE_ENV}`));
})