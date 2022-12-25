# Dont ask question ^^
Just a repository for my school during my nodejs course.

## 1. How to use it
1. Clone the repository
2. Install the dependencies with `npm install`
3. Configure the file `config.json` with your database informations, and the port you want to use
4. Load the fixtures with `npm run fixtures` :
   - *You need to have a mongoDB server running*
   - *For strange reason you are forced to close manually when the command finish*
5. Start the server with `npm start`
6. Go to `http://localhost:{Your port}`
7. Enjoy

## 2. Routes
#### GET /
- Return the index page

#### GET /api/animes/
- Return all the animes

#### POST /api/animes/
- Create somes new anime entry based on the title in the body

#### GET /api/animes/:id
- Return the anime with the id referenced in the url

## 3. Create new routes
Referer to the documentation of [Hitsui](/src/Lib/Hitsui/README.md)

## 4. Create new commands
Referer to the documentation of [Kurami](/src/Lib/Kurami/README.md)

## 5. Librairies used
- Hitsui (No repository yet - By me) : Custom auto routing system using annotations
- Kurami (No repository yet - By me) : Custom command line system 
- [Mongoose](https://github.com/Automattic/mongoose) : MongoDB ORM
- [EJS](https://github.com/mde/ejs) : Templating engine
- [Fastify](https://github.com/fastify/fastify) : Web framework
- [@fastify/static](https://github.com/fastify/fastify-static) : Static files plugin
- [@fastify/view](https://github.com/fastify/point-of-view) : Templating plugin
- [Axios](https://github.com/axios/axios) : HTTP client
- [fs](https://nodejs.org/api/fs.html) : File system