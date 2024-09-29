require("dotenv").config()
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    blood:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:""
    },
    refreshToken:{
        type:String,
        default:""
    },
   
},{timestamps:true})


userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    return next();
})

userSchema.method.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.method.generateAccessToken =  function(){
    return jwt.sign(
        {
            id:this._id,
            fullname: this.fullname,
            blood: this.blood,
            mobile : this.mobile
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.method.generateRefreshToken =  function(){
    return jwt.sign(
        {
            id:this._id,
        },
        process.env.REFRESH_TOEKN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model("User",userSchema);
module.exports = User;
