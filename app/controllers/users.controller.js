const User = require("./../models/user.model.js");

exports.getAll = (req, res) => {
    User.getAll((err, data) => {
        if(err) {
            res.status(500).send({
                message:
                    err.message || "Some issue occoured"
            });
        } else {
            // res.send(data);
        }
    })
}