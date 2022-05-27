//Create two routes with get and post requests, 
 //the route with the get route should get a list
 //of all users stored on MongoDb
 //The post route should create a user using the schema
 //Name: course: year:

const express = require("express");
const mongoose = require("mongoose");
const profileRouter = require("./routes/crudRoutes.js");
const app = express();
app.use(express.json());


//connection to database
//sir I'm using a loacl database in my local machine
//I named it kodecampDB
mongoose.connect('mongodb://localhost:27017/kodecampDB', {},
    function (err) {
        if (err) console.log(err);
        console.log("Connected to database successfully");
    });


//entry point

app.use('/profile', profileRouter);


 const port = process.env.PORT || 6000;
 app.listen(port, () => console.log(`Josh Listening on port ${port}...`));
