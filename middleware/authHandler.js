import bcrypt from 'bcrypt';

const encryptPassword = (req, res, next) => {
    console.log('---> authHandler.js');

    req.body.password = bcrypt.hashSync(req.body.password, 2);
    next();
}

export default encryptPassword;