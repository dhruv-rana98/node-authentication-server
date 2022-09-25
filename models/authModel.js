const mongoose = require("mongoose");

const authModelSchema = new mongoose.Schema({
  //   username: new FormControl("", [Validators.required]),
  //   email: new FormControl("", [Validators.email, Validators.required]),
  //   password: new FormControl("", [Validators.required]),
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const authUser = mongoose.model("authUser", authModelSchema);
module.exports = authUser;
