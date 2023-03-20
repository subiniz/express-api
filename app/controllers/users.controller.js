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
// params = parameters
const show = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id);
        res.send(user);
    } catch (error) {
        console.log("ERROR :: ", error);
        // res.status(500).send({ "error" : error.message });
        res.status(500).send(error);
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { name, semester, email } = req.body;
    try {
        await UserModel.updateUser(id, name, semester, email);
        res.send("User Successfully Updated");
    } catch (error) {
        console.log("ERROR :: ", error);
        res.status(500).send(error);
    }
}

module.exports = {
    index,
    create,
    show,
    update
}
