
const app = ((req, res) => {
    res.json({ message: 'this is Router two!' });
});

const productRoute = ((req, res) => {
    res.json({ product: [] });
    console.log(req.params)
});

module.exports = {
    app,
    productRoute
}