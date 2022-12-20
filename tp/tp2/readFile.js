const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, './../assets/file.json');

const readFile = fs.readFileSync(file, 'utf-8');
console.log(readFile);
