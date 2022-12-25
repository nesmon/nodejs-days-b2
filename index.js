// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: false
})
const yuhiiConfig = require('./config.json')
const mongoose = require('mongoose')
const hitsui = require('./src/Lib/Hitsui')
const path = require('path')

const database = mongoose.connect(yuhiiConfig.database.url)

new hitsui(path.join(__dirname, 'src/Controller'), "Controller").generateRoute(fastify)

fastify.register(require('@fastify/view'), {
    engine: {
        ejs: require('ejs')
    },
    templates: path.join(__dirname, 'src/Template')
})

database.then(() => {
    console.log("Connected to database")

    fastify.listen(yuhiiConfig.port, (err, address) => {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
        fastify.log.info(`Server listening on ${address}`)
    })
})