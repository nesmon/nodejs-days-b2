const fs = require("fs");
const path = require("path");

function listFile(directory) {
    const readDirectory = fs.readdirSync(directory);

    let fileArray = [];

    readDirectory.forEach((file) => {
        let filePath = path.join(directory, file);

        if (fs.statSync(filePath).isDirectory()) {
            // If the file is a directory, we need to list is content
            fileArray = fileArray.concat(listFile(filePath));
        } else {
            // Remove the first part of the path to get the relative path
            filePath = filePath.slice(filePath.indexOf("assets"));

            // Replace \\ with / in case this is executed onwindows
            filePath = filePath.replace(/\\/g, "/");
            fileArray.push(filePath);
        }
    });

    return fileArray;
}

const listedFiles = listFile(path.join(__dirname, "./../assets"));
console.log(listedFiles);