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
// - Fichier static
app.use(express.static('public'))
// - Gestion des formulaires (Content-Type : application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Config du moteur de vue
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routing
app.use(router);

// Demarrage du server
app.listen(PORT, () => {
    console.log(chalk.magenta(`Server up on port ${PORT} in mode ${NODE_ENV}`));
})