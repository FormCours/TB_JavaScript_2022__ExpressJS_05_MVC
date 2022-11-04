// Chargement des variables d'env
require('dotenv-flow').config();
const { PORT, NODE_ENV } = process.env;

// Les imports
const express = require('express');
const chalk = require('chalk');

// Création du server
const app = express();

// TODO Add Routing

// Demarrage du server
app.listen(PORT, () => {
    console.log(chalk.magenta(`Server up on port ${PORT} in mode ${NODE_ENV}`));
})