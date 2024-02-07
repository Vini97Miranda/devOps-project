'use strict';
/* eslint-env node, es6 */

// express package
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {PythonShell} = require('python-shell');
// Import Page
const generate_pages = require('./pages-get.js');

//IMPORT DATABASE
const database = require('./database')
// Create express application
const app = express();
const PORT = 6969;



const assetsPath = '/Users/victoragahi/Documents/GitHub/devOps-project/assets';
// CHANGE BY YOUR PATH

app.use('/assets/css', express.static(path.join(assetsPath, 'css')));
app.use('/assets/img', express.static(path.join(assetsPath, 'img')));
app.use('/assets/js', express.static(path.join(assetsPath, 'js')));
app.use(bodyParser.json());

// Main Root
app.get('/', async (req, res) => {
    const indexHtml = await generate_pages("index");
    res.send(indexHtml);
});

// Root login
app.get('/login-page', async (req, res) => {
    const LoginHtml = await generate_pages("/login-page/login-page");
    res.send(LoginHtml);

});

// Password Root
app.get('/change-password', async (req, res) => {
    const passwordHtml = await generate_pages("/login-page/change-password");
    res.send(passwordHtml);
});


app.post('/login-page', async (req, res) => {
    const {username, password, bool} = req.body;
    await database(username,password);

    /*
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', bool);
    res.json({ status: 'Message received' });

    const options = {
        args: [username, password, bool]
    };
    PythonShell.run('../assets/py/database-gestion.py', options, function (err, result) {
        if (err) {
            throw err;
        }
    });*/
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server Start : http://localhost:${PORT}`);
});
