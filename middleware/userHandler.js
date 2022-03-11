import HttpError from "http-errors";

const validateUserEmail = (req, res, next) => {
    console.log('---> userHandler.js');

    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.username)){
        console.log("User format correct");
        next();
    }
    else{
        next(HttpError(400, { message: "Error username format" }));
    }
}

export default validateUserEmail;