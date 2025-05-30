const errorResponse = require("../utils/error_response");
const badRequest = require("../errors/bad_request_error");
const { StatusCodes, ReasonPhrases } = require("http-status-codes")

function createProductValidator(req, res, next) {
  if (!req.body.title) {
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json(errorResponse(ReasonPhrases.BAD_REQUEST, badRequest('title')));
  }

  if (!req.body.price) {
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json(errorResponse(ReasonPhrases.BAD_REQUEST, badRequest('price')));
  }

  if (!req.body.description) {
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json(errorResponse(ReasonPhrases.BAD_REQUEST, badRequest('description')));
  }

  if (!req.body.image) {
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json(errorResponse(ReasonPhrases.BAD_REQUEST, badRequest('image')));
  }

  if (!req.body.category) {
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json(errorResponse(ReasonPhrases.BAD_REQUEST, badRequest('category')));
  }

  next();
}

module.exports = {
  createProductValidator,
};
