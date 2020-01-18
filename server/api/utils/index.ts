import { Response } from 'express';
const ErrorMessages = require("./errorMessages.js");

const RouteExceptionHandler = (_: any, res: Response) => {
    res
        .status(ErrorMessages.BadRequest.statusCode)
        .json(ErrorMessages.BadRequest)
}

module.exports = {
    RouteExceptionHandler
}