const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.HOST,
    DB_USER: process.env.USER, 
    DB_PASSWORD: process.env.PASSWORD,
    DB_NAME: process.env.DATABASE,
}