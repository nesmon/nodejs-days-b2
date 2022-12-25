// External Dependancies
const Anime = require('../../Entity/Anime.js')

class AnimeController {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    /* @HitsuiRouting
    * Route: /api/animes
    * Method: GET
    * Function: index
    */
    async index() {
        console.log("hello")
        const animes = await Anime.find();

        console.log(animes)
    }

    /* @HitsuiRouting
    * Route: /anime/test
    * Method: GET
    * Function: test
    */
    async test() {
        const animes = await Anime.find({});

        console.log(animes)
    }
}

module.exports = AnimeController;