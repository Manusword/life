const mongoose = require("mongoose");

const keepcodingClientSchema = new mongoose.Schema({
    name: {type: String, required: true,trim: true },
    defaultyoutube: {type: Number, trim: true,default: 5,},
    defaultfacebook: {type: Number, trim: true,default: 10,},
    defaultreels: {type: Number, trim: true,default: 15,},
    defaultgraphics: {type: Number, trim: true,default: 20,},
    youtube: {type: Number, trim: true,default: 5,},
    facebook: {type: Number, trim: true,default: 10,},
    reels: {type: Number, trim: true,default: 15,},
    graphics: {type: Number, trim: true,default: 20,},
    
}, { timestamps: true });

const Client = mongoose.model("keepcodingclients", keepcodingClientSchema);
module.exports = Client;
