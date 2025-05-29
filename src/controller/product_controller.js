function createProduct(req, res) {
    try{
        console.log('created product');
        res.json({
        success: true,
        message: 'Product created successfully',
        error: {},
        data: {
            id: Math.random() * (20),
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image: req.body.image
        }
    })
    }catch(err){
        console.log('Something went wrong', err)
    }
}


module.exports = {
    createProduct
}