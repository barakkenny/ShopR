const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const productService = require('../services/product_service')

function createProduct(req, res) {
    try{
        const response = productService.createProduct(req.body)
        res.status(StatusCodes.CREATED).json({
        success: true,
        message: ReasonPhrases.CREATED + ' Product',
        error: {},
        data: response,
    })
    }catch(err){
        console.log('Something went wrong', err)
    }
}

async function getProducts(req, res) {
    try{
        const response = productService.getProducts();
        console.log(response)
        res.status(StatusCodes.OK).json({
        success: true,
        message: 'Successfully fetched the Product',
        error: {},
        data: response,
    })
    }catch(err){
        console.log('Something went wrong', err)
    }
} 

function getProduct(req, res){
    try{
        const response = productService.getProduct(req.params.id);
        res.status(StatusCodes.OK).json({
        success: true,
        message: 'Successfully fetched one Product',
        error: {},
        data: response,
    })
    }catch(err){
        console.log('Something went wrong', err)
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}