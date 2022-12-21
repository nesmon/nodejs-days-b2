const AnimeFixture = require('../Fixture/AnimeFixture.js')
const BaseCommand = require('./BaseCommand.js')

class LoadFixture extends BaseCommand{
    constructor() {
        super({
            name: 'load:fixture',
            description: 'Load fixtures'
        })
    }

    async run() {
        const animeFixture = new AnimeFixture()
        animeFixture.load()
    }
}

module.exports = LoadFixture