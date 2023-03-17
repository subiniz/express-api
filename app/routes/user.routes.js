module.exports = (app, router) => {
    const userController = require('../controllers/users.controller.js');
    // Build new API Endpoint/URL

    // Get all users
    router.get('/', userController.index);

    // Create new user
    // router.post('/', userController.create);

    app.use('/api/users', router);
}