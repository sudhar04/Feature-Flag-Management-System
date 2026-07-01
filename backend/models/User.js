const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },

    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    }

}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;