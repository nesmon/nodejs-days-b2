// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: false
})
const yuhiiConfig = require('./config.json')
const mongoose = require('mongoose')
const hitsui = require('./src/Lib/Hitsui')
const path = require('path')


const database = mongoose.createConnection(yuhiiConfig.database.url)

new hitsui(path.join(__dirname, 'src/Controller'), "Controller").generateRoute(fastify)

fastify.register(require('@fastify/view'), {
    engine: {
        ejs: require('ejs')
    },
    templates: path.join(__dirname, 'src/Template')
})

database.on('error', console.error.bind(console, 'connection error:'))
database.once('open', function () {
    console.log('Connected to database')
})


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