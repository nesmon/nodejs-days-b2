// Create a simple http server for serve a static file
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const file = path.join(__dirname, "./../assets/index.html");
    const readFile = fs.readFileSync(file, "utf-8");
    res.end(readFile);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

