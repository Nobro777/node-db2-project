const express = require('express');
const server = express();

server.use(express.json());

const carsRouter = require('../cars/carsRouter.js')

server.use("/api/cars", carsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;