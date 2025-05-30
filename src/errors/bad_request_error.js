
function badRequest(propertyMissing) {
    const errorMessage = `${propertyMissing}is missing from the request body`;
    const statusCode = 400;
    const err = errorMessage;
    return {
        statusCode,
        errorMessage,
        err
    };
}

module.exports = badRequest;