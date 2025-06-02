const FakeStoreRepository = require('../repositories/fake_store_repo');

const products = [];

const repository = FakeStoreRepository;

function createProduct(product){
 const newProduct = {
    id: products.length,
    ...product
 }
 products.push(newProduct);
 return newProduct;
}

async function getProducts() {
    const response = await repository.getProducts();
    return response.data;
}

function getProduct(id) {
    return products.filter(product => product.id == id);
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}