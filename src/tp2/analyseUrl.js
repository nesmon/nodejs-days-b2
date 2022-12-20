const querystring = require('querystring');
const url = require('url');

const fullUrl = 'https://nodejs.org/api/fs.html#fslstatsyncpath-options';

const parseUrl = url.parse(fullUrl);

console.log(parseUrl);