// Create fixtures for the Anime entity using myanimelist

const Anime = require('../Entity/Anime.js')
const axios = require('axios')

class AnimeFixture {
    constructor() {
        this.url = 'https://api.jikan.moe/v3'
    }

    async load() {
        const anime = await this.getAnimesByPopularity()
        const animeEntity = new Anime({
            name: anime.title,
            description: anime.synopsis,
            image: anime.image_url,
            episodes: anime.episodes,
            status: anime.status,
            genres: anime.genres.map(genre => genre.name),
            rating: anime.score,
            views: anime.members
        })
        animeEntity.save()
    }

    async getAnimesByPopularity() {
        const response = await axios.get(`${this.url}/top/anime/1/bypopularity`)
        return response.data.top
    }
}

module.exports = AnimeFixture