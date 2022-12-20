const fs = require("fs");
const path = require("path");

function createFile(directory, fileName, content) {
    const filePath = path.join(directory, fileName);
    fs.writeFileSync(filePath, content);
}

createFile(path.join(__dirname, "./../assets"), "test.txt", "Hello world!");