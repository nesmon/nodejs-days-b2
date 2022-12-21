// External Dependancies
const mongoose = require('mongoose')

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
        this.res.send({
            hello: 'world'
        })
    }
}

module.exports = IndexController;