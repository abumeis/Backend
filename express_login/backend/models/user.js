const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    profilePic: { type: String, },
    firstName: { type: String, required: true },
    surName: { type: String, unique: true, required: true },
    dateOfBirth: { type: Date, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true },
    ///passwordConfirmation: { type: String, required: true },


});
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;



