const mongoose = require("mongoose");
const { Schema } = mongoose;

const RepositorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    content: [ 
        {
            type: String,
            required: true, 
        }
    ],
    visibility: {
        type: Boolean,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    issues: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Issue",
        }
    ],

});

const Repository = mongoose.model("Repository", RepositorySchema);
module.exports = Repository;  