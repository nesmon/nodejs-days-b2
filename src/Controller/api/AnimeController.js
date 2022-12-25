// External Dependancies
const Anime = require('../../Entity/Anime.js')
const JikanAPI = require('../../Services/JikanAPI/index.js')
const AnimeHelper = require('../../Helper/AnimeHelper.js')

class AnimeController {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    /* @HitsuiRouting
    * Route: /api/animes/
    * Method: GET
    * Function: index
    */
    async index() {
        const animes = await Anime.find()
        return this.res.send(animes)
    }

    /* @HitsuiRouting
    * Route: /api/animes/
    * Method: POST
    * Function: store
    */
    async store() {
        const animes = await JikanAPI.getAnimesBySearch(this.req.body.title)

        animes.map(async anime => {
            await AnimeHelper.saveAnime(anime)
        })

        return this.res.send("Ended")
    }

    /* @HitsuiRouting
    * Route: /api/animes/:id
    * Method: GET
    * Function: show
    */
    async show() {
        const anime = await Anime.find()

        return this.res.send(anime[Number (this.req.params.id)])
    }

}

module.exports = AnimeController;