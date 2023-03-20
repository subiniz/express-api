module.exports = (app, router) => {
    const userController = require('../controllers/users.controller.js');
    // Build new API Endpoint/URL

    // Get all users
    router.get('/', userController.index); // http://localhost:8080/api/users -> GET

    // Create new user
    router.post('/', userController.create); // http://localhost:8080/api/users -> POST

    // Get a single user by id
    router.get('/:id',userController.show); // http://localhost:8080/api/users/1 -> GET

    // Update user by id
    router.put('/:id', userController.update) // http://localhost:8080/api/users/1 -> PUT

    // Delete user by id
    // router.delete('/:id', userController.delete)

    app.use('/api/users', router);
}