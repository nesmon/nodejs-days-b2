const Anime = require('../Entity/Anime.js')
const JikanAPI = require('../Services/JikanAPI/index.js')
const AnimeHelper = require('../Helper/AnimeHelper.js')

class AnimeFixture {
    constructor() {
        this.url = 'https://api.jikan.moe/v4'
    }

    async load() {
        const animesName = [
            "One piece",
            "Naruto",
            "Bleach",
            "Dragon ball",
            "Pokemon",
            "Hunter x hunter",
            "Fairytale",
            "A certain magical index",
            "A certain scientific railgun",
            "A certain scientific accelerator",
            "Haruhi suzumiya",
            "Kuroko no basket",
            "Nisekoi",
            "Fruits basket",
        ]

        let animes = await JikanAPI.getAnimeByPopularity()

        for (let i = 0; i < animesName.length; i++) {
            console.log(`Searching for ${animesName[i]}`)
            const animesFromSearch = await JikanAPI.getAnimesBySearch(animesName[i])
            animes = animes.concat(animesFromSearch)

            await new Promise(resolve => setTimeout(resolve, 800));
        }

        animes.map(async anime => {
            await AnimeHelper.saveAnime(anime)
        })
    }
}

module.exports = AnimeFixture