const Anime = require('../Entity/Anime.js')
const axios = require('axios')

class AnimeFixture {
    constructor() {
        this.url = 'https://api.jikan.moe/v4'
    }

    async load() {
        const anime = await this.getAnimesByPopularity()
        anime.map(async anime => {
            const animeExists = await Anime.findOne({name: anime.title})

            if (animeExists !== null) {
                return console.log(`Anime ${anime.title} already exists`)
            }

            console.log(`Loading ${anime.title}...`)

            const animeEntity = new Anime({
                name: anime.title,
                description: anime.synopsis,
                image: anime.images.jpg.image_url,
                episodes: anime.episodes,
                status: anime.status,
                rating: anime.score,
                members: anime.members
            })

            await animeEntity.save()
        })
    }

    async getAnimesByPopularity() {
        const response = await axios.get(`${this.url}/top/anime`)
        return response.data.data
    }
}

module.exports = AnimeFixture