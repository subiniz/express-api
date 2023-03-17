// This page is being accessed first every time
const express = require("express");
const port = 8080;

const app = express();
/**
 * The app.use() function adds a new middleware to the app.
 * Middleware: Before accessing any controller, the middleware function is run.
 * express.json(): It parses the incoming JSON request and puts the parsed data in req.body.
 */
app.use(express.json());
// API #1 - Main home page api
app.get("/", (req, res) => {
    res.json({ data: "This is the main page!"});
});

// This require is used so that routing can be seperated
require("./app/routes/main.routes.js")(app);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})