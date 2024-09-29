const userService = require('../services/user.service')
const userDb = new userService();

const registerUser = async (req,res)=>{
    try{
           const data = await  userDb.newUser(req,res)
           res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({message: "something went wrong "})
    }
   
}




module.exports = {registerUser}