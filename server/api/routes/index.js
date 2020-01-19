// Require all necessary files
const express = require("express"),
Utils = require("../utils"),
router = express.Router(),
Test = require("../handlers/test.js");

router
	.route("/test")
	.get(Test.test)

// Error handling if bad request
router
    .route('*')
    .all(Utils.RouteExceptionHandler) // Route Exception

// export the router module
module.exports = router;