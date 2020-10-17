"use strict";

const express = require("express"),
    bodyParse = require("body-parser"),
    server = express(),
    config = require('../config'),
    routes = require('./Routes/Routes'),
    morgan = require('morgan'),
    path = require('path'),
    serveStatic = require("serve-static");

server.use(serveStatic(path.join(__dirname, "dist")));

// Set Server Config
server.use(bodyParse.urlencoded({
    extended: true
}));
server.use(bodyParse.json());

server.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

// Configure Routes
server.use('/chat', routes);

// Start Server
server.listen(config.Environment.Port, function () {
    console.log("Server is up and listening on port " + config.Environment.Port);
});