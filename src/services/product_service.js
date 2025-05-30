
const products = [];

function createProduct(product){
 const newProduct = {
    id: products.length,
    ...product
 }
 products.push(newProduct);
 return newProduct;
}

function getProducts() {
    return products;
}

function getProduct(id) {
    return products.filter(product => product.id == id);
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}