const mongoose = require("mongoose");

const donerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,  // Changed to String to accommodate country codes and leading zeros
        required: true,
        validate: {
            validator: function(v) {
                return /\d{10,15}/.test(v);  // Ensure it has 10-15 digits
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    blood: {
        type: String,
        required: true,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],  // Only allow valid blood types
        message: '{VALUE} is not a valid blood type'
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    no_of_time: {
        type: Number,
        trim: true,
        default: 0,
    },
    avatar: {
        type: String,
        default: "",
        validate: {
            validator: function(v) {
                return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i.test(v);  // Ensure it's a valid image URL
            },
            message: props => `${props.value} is not a valid URL!`
        }
    }
}, { timestamps: true });

const Doner = mongoose.model("Doner", donerSchema);
module.exports = Doner;
