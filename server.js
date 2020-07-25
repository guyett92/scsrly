const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const port = process.env.PORT || 3001;

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Mount Routers

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Express is listening on port: ${port}`);
})