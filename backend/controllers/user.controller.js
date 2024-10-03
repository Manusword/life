const userService = require('../services/user.service')
const userDb = new userService();

const registerUser = async (req,res)=>{
    try{
           const data = await  userDb.newUser(req,res)
    }
    catch(err){
        res.status(500).json({message: "something went wrong ", error: err.message })
    }
   
}





module.exports = {registerUser}