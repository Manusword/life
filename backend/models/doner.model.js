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
    },
    blood: {
        type: String,
        required: true,
        //enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],  // Only allow valid blood types
        message: '{VALUE} is not a valid blood type'
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    last_donation_date: {
        type: Date,
        default: '',
    },
    status:{
        type:String,
        default:"Active"
    },
    no_of_time: {
        type: Number,
        trim: true,
        default: 0,
    },
    avatar: {
        type: String,
        default: "",
        
    },
    UserId:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
}, { timestamps: true });

const Doner = mongoose.model("Doner", donerSchema);
module.exports = Doner;

