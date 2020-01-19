const NotFound = { 
    "message" : "No records Found",
    "statusCode" : 404
}

const RequiredFieldsNotFound = { 
    "message" : "Required Fields Not Found",
    "statusCode" : 404
}

const BadRequest = { 
    "message": "404 Bad Request, please check your specified endpoint and request method",
    "statusCode": 404
}

module.exports = {
    NotFound,
    RequiredFieldsNotFound,
    BadRequest
}