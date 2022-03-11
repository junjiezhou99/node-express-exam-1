import HttpError from "http-errors";
import bcrypt from 'bcrypt';
import userModel from "../models/userModel.js";

const getAllUsers = (req, res) => {
    console.log("---> userController::getAllUsers");

    const users = userModel.getUsers();
    res.json(users);
}

const addUsers = (req, res, next) => {
    console.log("---> userController::addUsers");

    try {
        let userExistance = userModel.checkUser(req.body);
        if (userExistance == undefined){
            userModel.addUsers(req.body);
            getAllUsers(req, res)
        }
        else{
            next(HttpError(400, { message: "UPS! User already exist" }));
        }
    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }
}

const checkUsers = (req, res, next) => {
    console.log("---> userController::checkUsers");

    try {
        let userExistance = userModel.checkUser(req.body);
        if (userExistance != undefined){
            console.log("Username has been finded");
            next();
        }
        else{
            next(HttpError(400, { message: "UPS! User not exist" }));
        }
    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }
}

const loginUsers = (req, res, next) => {
    console.log("---> userController::loginUsers");

    try {
        let userExistance = userModel.checkUser(req.body);
        let result = bcrypt.compareSync(req.body.password, userExistance.password);
        if (result){
            console.log("Login Successful");
            res.send(userExistance);
        }
        else{
            next(HttpError(400, { message: "UPS! Password is wrong" }));
        }
    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }
}

export default {
    getAllUsers,
    addUsers,
    checkUsers,
    loginUsers
}