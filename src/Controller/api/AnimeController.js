// External Dependancies
const mongoose = require('mongoose')

class AnimeController {
    constructor(req, res, database) {
        this.req = req
        this.res = res
    }

    /* @HitsuiRouting
    * Route: /anime
    * Method: GET
    * Function: index
    */
    async index() {
        this.res.send({
            hello: 'world'
        })
    }

    /* @HitsuiRouting
    * Route: /anime/test
    * Method: GET
    * Function: test
    */
    async test() {
        this.res.send({
            hello: 'test'
        })
    }
}

module.exports = AnimeController;