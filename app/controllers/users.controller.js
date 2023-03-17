const UserModel = require("./../models/user.model.js");

// Get All Users
const index = async (req, res) => {
    try {
        // console.log("We are in controller");
        const users = await UserModel.findAll();
        res.send(users);
        // console.log(users);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    index
}
