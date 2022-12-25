# Kurami - Command manager
Kurami is a command manager similar to the command system of Symfony.

## Why Kurami ?
Nice question, and I have absolutly no answer, in reality it's just birth because needted to setup fixture in a project and wanted to have something clean.
But you will probably find a better utility than me ^^

## How it works ?
You can create a command file with this structur :
```js
const BaseCommand = require('./BaseCommand.js')

class BasicCommand extends BaseCommand{
    constructor() {
        super({
            name: 'basic',
            description: 'Basic command'
        })
    }

    async run() {
        // Your command here
    }
}

module.exports = LoadFixture
```

Then run ``node index.js {commandName}``

And done !

## Disclaimer
It's an experimental version, some problem persist like no exit after command ended.
For the moment this vesion is only usable with this project and this structur