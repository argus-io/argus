// Require all necessary files
import { Router } from 'express';
const Utils = require("../utils"),
router = Router(),
Test = require("../handlers/test");

router
	.route("/test")
	.get(Test.test)

// Error handling if bad request
router
    .route('*')
    .all(Utils.RouteExceptionHandler) // Route Exception

// export the router module
module.exports = router;