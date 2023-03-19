module.exports = (app, router) => {
    const userController = require('../controllers/users.controller.js');
    // Build new API Endpoint/URL

    // Get all users
    router.get('/', userController.index); // http://localhost:8080/api/users -> GET

    // Create new user
    router.post('/', userController.create); // http://localhost:8080/api/users -> POST

    // Get a single user by id
    router.get('/:id',userController.show); // http://localhost:8080/api/users/1

    app.use('/api/users', router);
}