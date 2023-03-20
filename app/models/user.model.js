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
const findById = (id) => {
    return new Promise((resolve, reject) => {
        sql.query('SELECT * FROM users WHERE id = ?', id, (err, results) => {
            if(err) {
                return reject(err);
            }
            if(results.length === 0 ) {
                return reject('User Not Found');
            }
            return resolve(results[0]);
        });
    });
}

const updateUser = (id, name, semester, email) => {
    return new Promise((resolve, reject) => {
        sql.query('UPDATE users set name = ?, semester = ?, email = ? WHERE id = ?', [name, semester, email, id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
}


module.exports = {
    findAll,
    createUser,
    findById,
    updateUser
};
