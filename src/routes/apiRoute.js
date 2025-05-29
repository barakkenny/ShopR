const pingRoute = require('./v1/index');
const pingRoute2 = require('./v2/pingRoutesv2');
const productRoute = require('./v1/index');

const express = require('express')

const router = express.Router()

router.use('/v1', pingRoute)

router.use('/v1', productRoute);

router.use('/v2', pingRoute2);

module.exports = router;