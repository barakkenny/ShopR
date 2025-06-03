const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const ProductService = require('../services/product_service')
const FakeStoreRepository = require('../repositories/fake_store_repo');

const productService = new ProductService(new FakeStoreRepository());

async function createProduct(req, res) {
    try{
        const response = await productService.createProduct(req.body)
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
        const response = await productService.getProducts();
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

async function getProduct(req, res){
    try{
        const response = await productService.getProduct(req.params.id);
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