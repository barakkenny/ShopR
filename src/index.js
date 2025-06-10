const express = require('express');
const apiRoute = require('./routes/apiRoute');
const bodyParser = require('body-parser');
const db = require('./config/db_config')
// const responseTime = require('response-time')
const { PORT} = require('./config/server-config');

const app = express();

const Category = require('./models/category');
// app.use(responseTime())


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoute);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    // db.connect((err) => {
    //     if (err) {
    //         console.error('Error connecting to the database:', err);
    //         throw err;
    //     }
    //     console.log('DB Connected');

    //     db.query('Select * from products', (err, result)=>{
    //         if(err) {
    //             console.error('Error fetching products:', err);
    //             throw err;
    //         }
    //         console.log(result[0]);
    //     })
    // });

    await db.sync()
    console.log('DB connected'); 
    const res = await Category.create({
        name: 'Electronics',
        description: 'Category for electronic products'
    });
    console.log(res)
}); 