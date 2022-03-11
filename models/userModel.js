import users from "../data/user.js";

class userModel {
    getUsers(){
        console.log("---> userModel::getUsers");

        return users;
    }

    addUsers(user){
        console.log("---> userModel::addUsers");

        return users.push(user);
    }

    checkUser(user){
        console.log("---> userModel::checkUser");

        return users.find(e => e.username == user.username);
    }
}

export default new userModel;