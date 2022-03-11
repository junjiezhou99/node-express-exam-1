const addTimesStamp = (req, res, next) => {
    console.log('---> timestampHandler.js');

    req.body.timestamp = new Date();
    next();
}

export default addTimesStamp;