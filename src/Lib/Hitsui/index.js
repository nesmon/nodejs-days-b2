const fs = require('fs');
const path = require('path');

class Hitsui {
    constructor(controllerPath, folderName) {
        this.controllerPath = controllerPath;
        this.folderName = folderName;
    }

    listControllerFile(controllerPath = this.controllerPath) {
        const readDirectory = fs.readdirSync(controllerPath);
    
        let fileArray = [];
    
        readDirectory.forEach((file) => {
            let filePath = path.join(controllerPath, file);

            if (fs.statSync(filePath).isDirectory()) {
                fileArray = fileArray.concat(this.listControllerFile(filePath));
            } else {
                filePath = filePath.slice(filePath.indexOf(this.folderName)).slice(this.folderName.length + 1);
    
                filePath = filePath.replace(/\\/g, "/");
                fileArray.push(filePath);
            }
        });
    
        return fileArray;
    }

    getRouteInformation() {
        let fileArray = this.listControllerFile();
        let routeInformation = [];
        for (let index = 0; index < fileArray.length; index++) {
            let file = fileArray[index];
            let fileContent = fs.readFileSync(path.join(this.controllerPath, file), 'utf8');
            let route = fileContent.match(/@HitsuiRouting[\s\S]*?\*\//g);
            if (route) {
                for (let index = 0; index < route.length; index++) {
                    let routeName = route[index].match(/Route[\s\S]*?\n/g)[0]
                    if (!routeName) {
                        throw new Error('Route name is not defined in ' + file);
                    }

                    routeName = routeName.replace('Route: ', '').replace('\r\n', '');
                    
                    let routeMethod = route[index].match(/Method[\s\S]*?\n/g)[0]
                    if (routeMethod) {
                        routeMethod = routeMethod.replace('Method: ', '').replace('\r\n', '');
                    } else {
                        routeMethod = 'GET';
                    }

                    let routeFunction = route[index].match(/Function[\s\S]*?\n/g)[0]
                    if (!routeFunction) {
                        throw new Error('Route function is not defined in ' + file);
                    }

                    routeFunction = routeFunction.replace('Function: ', '').replace('\r\n', '');

                    routeInformation.push({
                        route: routeName,
                        method: routeMethod,
                        controller: file.replace('.js', ''),
                        function: routeFunction
                    })
                }
            }
        }

        return routeInformation;
    }

    generateRoute(fastify) {
        let routeInformation = this.getRouteInformation();
        let route = '';
        for (let index = 0; index < routeInformation.length; index++) {
            let controler = require(path.join(this.controllerPath, routeInformation[index].controller));
            let routeInfo = routeInformation[index];
            route = `
                fastify.route({ 
                    method: '${routeInfo.method}',
                    url: '${routeInfo.route}',
                    handler: (req, res) => new controler(req, res).${routeInfo.function}()
                })
            `;

            new Function('fastify', 'controler', route)(fastify, controler)
        }
    }

    callController(controllerName, req, res) {
        let controllerPath = path.join(this.controllerPath, controllerName);
        let controller = require(controllerPath);

        return new controller(req, res);
    }
}

module.exports = Hitsui;