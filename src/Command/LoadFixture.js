const AnimeFixture = require('../Fixture/AnimeFixture.js')
const BaseCommand = require('./BaseCommand.js')
const mongoose = require('mongoose')
const config = require('./../../config.json')

class LoadFixture extends BaseCommand{
    constructor() {
        super({
            name: 'load:fixture',
            description: 'Load fixtures'
        })
    }

    async connectToDatabase() {
        console.log("Connecting to database...")
        mongoose.connect(config.database.url)
        console.log("Connected to database")
    }

    async run() {
        this.connectToDatabase()
        const animeFixture = new AnimeFixture()
        await animeFixture.load()
    }
}

module.exports = LoadFixture