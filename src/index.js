const express = require('express');
const serverConfig = require('./config/server-config');
const pingController = require('./controller/pingController');

const app = express();

app.get('/api/ping', pingController);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
});