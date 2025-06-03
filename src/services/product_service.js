const products = [];

// const repository = getProducts()
class ProductService {

  constructor(repository) {
    this.repository = repository;
  }

  createProduct(product) {
    const newProduct = {
      id: products.length,
      ...product,
    };
    products.push(newProduct);
    return newProduct;
  }

  async getProducts() {
    const response = await this.repository.getProducts();
    return response;
  }

  async getProduct() {
    const response = await this.repository.getProduct();
    return response;
  }
}

module.exports = ProductService
