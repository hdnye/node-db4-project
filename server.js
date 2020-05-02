const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

//import Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

//import routes


//error Middleware
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: 'Unable to complete requested operation'
    })
})

module.exports = server;

