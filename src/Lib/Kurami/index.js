const fs = require('fs');
const path = require('path');

class Kurami {
    constructor() {
        this.path = path.join(__dirname, '../../Command')
        this.run(process.argv.slice(2))
    }

    getCommandsInfo() {
        const commands = fs.readdirSync(this.path)
        
        let cleanCommandsList = this.cleanCommandsList(commands)
        
        return cleanCommandsList.map(commandFile => {
            const command = require(path.join(this.path, commandFile))
             return {
                name: new command().getName(),
                description: new command().getDescription(),
                fileName: commandFile
            }
        })
    }

    cleanCommandsList(commands) {
        let cleanCommandsList = []

        commands.map(file => {
            if (file !== 'BaseCommand.js') {
                cleanCommandsList.push(file)
            }
        })

        return cleanCommandsList
    }

    run(args) {
        const commands = this.getCommandsInfo()

        if (args[0] === "help" || args.length === 0) {
            this.runHelp()
        }

        if (args.length > 0 && args[0] !== "help") {
            const command = commands.find(command => command.name === args[0])

            if (command) {
                const commandFile = require(path.join(this.path, command.fileName))
                new commandFile().run()
            } else {
                console.log('Command not found')
            }
        }
    }

    runHelp() {
        console.log('Kurami CLI')
        console.log('Available commands:')
        this.getCommandsInfo().map(command => {
            console.log(`- ${command.name} - ${command.description}`)
        })
    }
}

module.exports = new Kurami()
