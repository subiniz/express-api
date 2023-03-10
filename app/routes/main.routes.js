module.exports = app => {
    var router = require("express").Router();
    const users = require("./../controllers/users.controller.js");

    // API #2 - GET all users list
    router.get("/get-all", (users.getAll));

    app.use("/api/users", router);
}