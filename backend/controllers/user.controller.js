const userService = require('../services/user.service')
const {hashPassword,verifyPassword} = require("../middlewares/bcrypt")
const {jwtCreateToken} = require("../middlewares/jwt")
const userDb = new userService();
const cookieParser = require('cookie-parser')

const registerUser = async (req,res)=>{
    try{
            const{mobile,password,rePassword} = req.body;
            //checking password and reenter password
            if(password !== rePassword){
                return res.status(400).json({message: "Password and Re-enter password are not same."})
            }
            //checking mob not exists or not
            const result = await userDb.mobileFind(mobile)
            if(result && result.length <= 0 ){
                return res.status(409).json({message: "Mobile number already present."})
            }
            //hash password
            const hashpass = await hashPassword(password);
           
            //adding new password into req.body
            const reqData = {...req.body, password: hashpass}
           
            //save into DB
            const createdData = await  userDb.newUser(reqData);
            
            const token = await jwtCreateToken(createdData._id, createdData.fullname)
            
            //return token with status
            res.status(201)
            .cookie('token',token,{httpOnly: true, secure:true, sameSite:'strict' })
            .json({
                userid:createdData._id, 
                username:createdData.fullname, 
                mobile: createdData.mobile,
                status: true 
            })
            
    }
    catch(err){
        res.status(500).json({message: "something went wrong ", error: err.message })
    }
   
}


const loginUser = async (req,res)=>{
    try{
        if(req.cookies.token){
            return res.status(200).json({status: true })
        }
    
        const {mobile,password} = req.body;
        if(!mobile || !password){
            return res.status(400).json({ message: "Mobile and password are required." });
        }
        
        //checking mob not exists or not
        const userData = await userDb.mobileFind(mobile)
        if(!userData){
            return res.status(401).json({message: "Invalid mobile number or password."})
        }
        
        // check password 
        const isPasswordValid = await verifyPassword(password,userData.password)
        if(!isPasswordValid){
            return res.status(401).json({message: "Password not found"})
        }
      
        //token
        const token = await jwtCreateToken(userData._id, userData.fullname)
        
        res.status(200)
        .cookie('token',token,{httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite:'strict' })
        .json({
                userid:userData._id, 
                username:userData.fullname, 
                mobile: userData.mobile,
                status: true 
        })
        
       
   }
   catch(err){
        console.error("Error during login:", err.message); // Log error for debugging
        res.status(500).json({ message: "An internal server error occurred.", error: err.message });
   }
}


module.exports = {registerUser,loginUser}