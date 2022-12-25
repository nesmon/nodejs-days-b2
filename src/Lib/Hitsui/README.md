# Hitsui - Auto-Routing system
Hitsui is an auto-routing system based on comment system

## Why Hitsui ?
Like Kurami, I have no answer ^^
Just would like to try to create something for play with file and see if I will be able to  do something like this.

## How it works ?
First define your router in your main file where Fastify is setup :


```js
const fastify = require('fastify')
const hitsui = require('./src/Lib/Hitsui')

const router = new hitsui("Path to your conroller folder", "Name of the folder").generateRoute(fastify)
```

Then create a controller like this :
```js
class IndexController {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    /* @HitsuiRouting
    * Route: /
    * Method: GET
    * Function: index
    */
    async index() {
        this.res.send({
            hello: 'world'
        })
    }
}

module.exports = IndexController;
```
And done !

## Disclaimer
It's an experimental version, some problem can exist for the moment.