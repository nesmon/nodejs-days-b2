const axios = require('axios');

class JikanAPI{
    constructor(){
        this.baseURL = 'https://api.jikan.moe/v4';
    }

    async getAnimesBySearch(query){
        const response = await axios.get(`${this.baseURL}/anime?q=${query}`);
        return response.data.data;
    }

    async getAnimeById(id){
        const response = await axios.get(`${this.baseURL}/anime/${id}`);
        return response.data;
    }

    async getAnimeByPopularity(){
        const response = await axios.get(`${this.baseURL}/top/anime`);
        return response.data.data;
    }
}

module.exports = new JikanAPI();