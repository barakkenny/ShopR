const axios = require('axios');

async function getProducts(){
    try{
        const response = await axios.get('https://fakestoreapi.com/products');
        return response;
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getProducts
}