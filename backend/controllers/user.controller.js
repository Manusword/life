const userService = require('../services/user.service')
const {hashPassword} = require("../middlewares/bcrypt")
const {jwtCreateToken} = require("../middlewares/jwt")
const userDb = new userService();

const registerUser = async (req,res)=>{
    try{
            const{mobile,password,rePassword} = req.body;
            //pass & re pass check
            //check mob already exits then return
            //password encrypt
            //save 
            //return user data or msg login startus with token
             
            //checking password and reenter password
            if(password !== rePassword){
                res.status(400).json({message: "Password and Re-enter password are not same."})
            }
            //checking mob not exists or not
            const result = await userDb.mobileFind(mobile)
            if(!result){
                res.status(409).json({message: "Mobile number already present."})
            }
            //hash password
            const hashpass = await hashPassword(password);
            //adding new password into req.body
            const reqData = {...req.body, "password": hashpass}
            //save into DB
            const createdData = await  userDb.newUser(reqData);
            const token = await jwtCreateToken(createdData._id, createdData.fullname)
            
            //return token with status
            res.status(201)
            .cookie('token',token,{httpOnly: true, secure:true, sameSite:'strict' })
            .json({userid:createdData._id, username:createdData.fullname, status: true })
            
    }
    catch(err){
        res.status(500).json({message: "something went wrong ", error: err.message })
    }
   
}





module.exports = {registerUser}