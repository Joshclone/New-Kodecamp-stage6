 //CRUD Operation handlers for the routes get and POst
const express = require("express");
const profileModel = require("../models/post");
const app = express();

//profile = (name, course, year)
//route handler for getting all profiles

app.get("/", async (request, response) => {
  const profiles = await profileModel.find({});
  try {
    response.send(profiles);
  } catch (error) {
    response.status(500).send(error);
  }
});

//route handler for a sinhle profile by id
// get single profile(name. course. year) by id
app.get("/:id", async (request, response) => {
  const userId = request.params.id;
  profileModel.findById(userId)
    .then((singleProfile) => {
      response.status(200).json({
        success: true,
        profile: singleProfile,
      });
    })
    .catch((err) => {
      response.status(500).json({
        success: false,
        message: 'This profile does not exist',
        error: err.message,
      });
    });
});

//route handler for post
app.post("/", async (request, response) => {
  const profile = new profileModel(request.body);

  try {
    await profile.save();
    response.send(profile);
  } catch (error) {
    response.status(500).send(error);
  }
});





module.exports = app;
