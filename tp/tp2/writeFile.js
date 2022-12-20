const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, './../assets/file.json');

const readFile = fs.readFileSync(file, 'utf-8');
let readFileObject = JSON.parse(readFile);

readFileObject.open_time++;

fs.writeFileSync(file, JSON.stringify(readFileObject), 'utf-8');