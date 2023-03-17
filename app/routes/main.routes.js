module.exports = app => {
    const express = require("express");
    const router = express.Router();

    require('./user.routes.js')(app, router);

    // require('./product.routes.js')(app, router);
    // require('./settings.routes.js');

}