import { Request, Response, NextFunction, Application } from 'express';
const bodyParser = require("body-parser"),
errorMessages = require("./api/utils/errorMessages");

module.exports.initialize = function(app: Application) {

    function appUse(app: Application, ...arg: any[]) {
        return app.use(arg)
    }

    return appUse(
        app,
        bodyParser.urlencoded({ extended: false }),
        bodyParser.json(),
        (req: Request, res: Response, next: NextFunction) => {
            res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET");
            res.header("Access-Control-Allow-Origin", "http://" + req.headers.host);
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            let regex = /(\/api\/)/g; // pattern which checks for `/api/` in the URL
            if (regex.test(req.originalUrl)) { // if the URL contains the pattern, then `next()`
                next();
            } else { // if the URL does not contain `/api`:
                res
                    .status(errorMessages.BadRequest.statusCode)
                    .json(errorMessages.BadRequest)
            }
        }
    )
}