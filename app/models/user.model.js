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

module.exports = {
    findAll
};
