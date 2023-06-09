/* eslint-disable semi */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('mainPage.html'));
});

module.exports = app;
