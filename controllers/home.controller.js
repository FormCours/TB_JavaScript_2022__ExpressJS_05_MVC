const { Request, Response } = require('express');

const homeController = {
    /**
     * Méthode index du home controller
     * @param {Request} req La requete
     * @param {Response} res La reponse
     */
    index: (req, res) => {
        res.render('home/index');
    },

    /**
     * Méthode contact du home controller
     * @param {Request} req La requete
     * @param {Response} res La reponse
     */
    contact: (req, res) => {
        res.render('home/contact');
    }
}

module.exports = homeController;