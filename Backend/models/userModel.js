const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,   
        required: true,
        unique: true,
    },  
    password: {
        type: String,
        required: true,
    },
    repositories: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Repository",
        },
    ],  
    followedUsers: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Users",
        },
    ],  
     starRepos: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Repository",
        },
    ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
