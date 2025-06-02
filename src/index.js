const express = require('express');
const serverConfig = require('./config/server-config');
const apiRoute = require('./routes/apiRoute');
const bodyParser = require('body-parser');
// const responseTime = require('response-time')

const app = express();


// app.use(responseTime())

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoute);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
}); 