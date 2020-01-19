const ErrorMessages = require("./errorMessages.js");

const RouteExceptionHandler = (_, res) => {
    res
        .status(ErrorMessages.BadRequest.statusCode)
        .json(ErrorMessages.BadRequest)
}

module.exports = {
    RouteExceptionHandler
}