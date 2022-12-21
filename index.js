// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: false
})
const yuhiiConfig = require('./config.json');
const mongoose = require('mongoose')

const database = mongoose.createConnection(yuhiiConfig.database.url)

database.on('error', console.error.bind(console, 'connection error:'))
database.once('open', function () {
    console.log('Connected to database')
})

function callController(controllerName, req, res) {
    return new(require(`./src/controller/${controllerName}Controller.js`))(req, res, database)
}

// Declare a route
fastify.get('/', (req, res) => callController('Index', req, res).index())

// AnimeConroller
fastify.get('/anime/', (req, res) => callController('api/Anime', req, res).index())

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()