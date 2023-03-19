const sql = require("./../config/db.config.js");

const findAll = () => {
    return new Promise((resolve, reject) => {
        sql.query('SELECT * FROM users', (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

const createUser = (name, semester, email) => { // SQL Injection Prevention = ?
    return new Promise((resolve, reject) => {
        sql.query('INSERT INTO users SET ?', { name, semester, email } ,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

// SELECT * FROM users where id = 4;

module.exports = {
    findAll,
    createUser
};
