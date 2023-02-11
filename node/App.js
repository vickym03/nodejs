const express = require("express"); //import express
const app = express(); //initializing the express
const port = 5000; // port number

// Creating the routes
/***Route1***/
app.get("/", (req, res) => res.send("Hello World!"));

/***Route1***/
app.get("/nodejs", (req, res) => res.send("Hello nodejs!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/*
To node the application with out nodmon -- node route_fileName
Example : node App.js
cons: if there is any chamges in code . we need to execute the command every time

so we can go for libray kinow "nodemon"   npm i nodemon
"start": "nodemon App.js"   (in package.json)
pros: node need to execute in terminal it will update

*/
