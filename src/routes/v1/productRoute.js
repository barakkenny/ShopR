const express = require('express');
const { createProduct } = require('../../controller/product_controller');
const { createProductValidator } = require('../../middlewares/product_middlewares');

const productRouter = express.Router();

// router.get('/products', productRoute);

// router.post('/product', (req, res) => {
//     res.json({product: []})
// })

// productRouter.get('/', createProduct)

productRouter.post('/', createProductValidator, createProduct);

module.exports = productRouter;