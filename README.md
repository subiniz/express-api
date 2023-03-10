1. Clone the project
2. Run `npm install`
3. Change the `db.config.js` file to your database credentials
4. Run `node server.js` or your file name instead os server.js, to start the server
5. Check the API in postman or any other API testing tool


M = Model = DB querying
V = View = HTML, VUEjs, ReactJS, PugJS
C = Controller = Logic parent, data manipulation part


1. localhost/api/users = user hits this url/endpoint
2. Routes
3. Controller
    a. Connect DB
4. Controller Calls Model
5. Returns queried data from model back to controller
6. Data format / Logic apply in controller
7. Return data back to api
