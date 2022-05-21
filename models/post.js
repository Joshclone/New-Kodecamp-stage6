
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
       // createDate: Date.now(),
  },
  course: {
    type: String,
    required: true,
       
  },
  year: {
    type: Number,
    required: true,

   
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;