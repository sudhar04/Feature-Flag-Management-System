const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
});

const Organization = mongoose.model(
    "Organization",
    organizationSchema
);

module.exports = Organization;