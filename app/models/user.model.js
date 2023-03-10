const sql = require("./../config/db.config.js");

//constructor
const User = user => {
    this.name = user.name;
    this.semester = user.semester;
    this.email = user.email;
}

User.getAll = () => {
    sql.query("SELECT * FROM users", (err, res) => {
        if(err) {
            console.log("ERROR:: ", err);
            return err.message;
        }
        console.log("USERS LIST:: ", res);
        return res.JSON();
    })
}

module.exports = User;
