require('dotenv').config();

const express = require("express"),
app = express(),
Configuration = require('./appconfig.js');

app.set('x-powered-by', false);

// api routes
let API = require("./api/routes");

app.use('/api', API);

Configuration.initialize(app)

// declaring ports
const port = process.env.PORT;

// listening to port and logging
app.listen(port);
console.log("Application is running on " + port);

module.exports = {
    app
};