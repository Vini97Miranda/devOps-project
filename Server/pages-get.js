const { join } = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const READ_OPTIONS = { encoding: 'UTF-8' };

const HTML_URL = `/Users/victoragahi/Documents/GitHub/devOps-project/`;
const INDEX_URL = join(HTML_URL,'index.html');
const LOGIN_URL = join(HTML_URL,'/login-page/login-page.html');

const ReadFile = file => {
    return readFileAsync(join(HTML_URL, file), READ_OPTIONS);
}

module.exports = async pageName => {
    return ReadFile(`${pageName}.html`);
};
