// External Dependancies
const mongoose = require('mongoose')

class AnimeController {
    constructor(req, res, database) {
        this.req = req
        this.res = res
        this.db = database
    }

    async index() {
        this.res.send({
            hello: 'world'
        })
    }
}

module.exports = AnimeController;