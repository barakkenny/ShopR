const express = require('express');
const {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = require('./config/server-config');
const apiRoute = require('./routes/apiRoute');
const bodyParser = require('body-parser');
// const responseTime = require('response-time')
const mysql = require('mysql2')

const app = express();


// app.use(responseTime())

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
})

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            throw err;
        }
        console.log('DB Connected');

        db.query('Select * from products', (err, result)=>{
            if(err) {
                console.error('Error fetching products:', err);
                throw err;
            }
            console.log(result[0]);
        })
    });
}); 