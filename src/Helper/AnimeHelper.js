const Anime = require("../Entity/Anime");

class AnimeHelper {
    async saveAnime(anime) {
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
    }
}

module.exports = new AnimeHelper()