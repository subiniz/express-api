// This page is being accessed first every time


const express = require("express");
// const cors = require("cors");

const app = express();
// API #1 - Main home page api
app.get("/", (req, res) => {
    res.json({ data: "This is the main page!"});
});

// This require is used so that routing can be seperated
require("./app/routes/main.routes.js")(app);

app.listen(8080, () => {
    console.log('App is runing on port 8080');
})