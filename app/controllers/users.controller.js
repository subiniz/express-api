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

// Post/Create new user
const create = async (req, res) => {
    try {
        // console.log(req.body);
        // const name = req.body.name;
        // const semester = req.body.semester;
        // const email = req.body.email;
        const {name, semester, email} = req.body;
        await UserModel.createUser(name, semester, email);
        // console.log(result);
        res.status(200).send("User successfully created");

    } catch (err) {
        console.log("ERROR :: ", err);
        res.status(500).send("Server Error");
    }
}

// Single User By ID
// req.params
// const { id } = req.params;

module.exports = {
    index,
    create
}
