// External Dependancies
const mongoose = require('mongoose')
const Anime = require('../Entity/Anime.js')

class IndexController {
    constructor(req, res, database) {
        this.req = req
        this.res = res
    }

    /* @HitsuiRouting
    * Route: /
    * Method: GET
    * Function: index
    */
    async index() {
        const animes = await Anime.aggregate([{ $sample: { size: 4 } }])
        return this.res.view('index.ejs', { animes: animes })
    }
}

module.exports = IndexController;