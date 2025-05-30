const express = require('express');
const { createProduct, getProducts, getProduct } = require('../../controller/product_controller');
const { createProductValidator } = require('../../middlewares/product_middlewares');

const productRouter = express.Router();

// router.get('/products', productRoute);

// router.post('/product', (req, res) => {
//     res.json({product: []})
// })

productRouter.get('/', getProducts)

productRouter.get('/:id', getProduct);

productRouter.post('/', createProductValidator, createProduct);

module.exports = productRouter;