const errorResponse = require("../utils/error_response");
const BadRequest = require("../errors/bad_request_error");

function createProductValidator(req, res, next) {
  if (!req.body.title) {
    return res.status(400).json(errorResponse('title is required', new BadRequest('title')));
  }

  if (!req.body.price) {
    return res.status(400).json(errorResponse('price is required', new BadRequest('price')));
  }

  if (!req.body.description) {
    return res.status(400).json(errorResponse('description is required', new BadRequest('description')));
  }

  if (!req.body.image) {
    return res.status(400).json(errorResponse('image is required', new BadRequest('image')));
  }

  if (!req.body.category) {
    return res.status(400).json(errorResponse('category is required', new BadRequest('category')));
  }

  next();
}

module.exports = {
  createProductValidator,
};
