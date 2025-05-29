const express = require('express');
const pingRoute = require('./pingRoute');
const productRoute = require('./productRoute');

const v1Router = express.Router();

v1Router.use('/products', productRoute);
v1Router.use('/ping', pingRoute);

module.exports = v1Router;