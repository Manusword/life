require('dotenv').config()
const mongoose = require("mongoose");
const DB_LINK = process.env.DB_LINK

const connectDB = async()=>{
    await mongoose.connect(DB_LINK)
    .then(()=>{
        console.log("connected to mongoose")
    })
    .catch((err)=>{
        console.log("Mongoose connection fail : ",err)
    })
}

module.exports =  connectDB

