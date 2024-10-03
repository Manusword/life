const User = require('../models/user.model')

class userService {

    //insert new user
    async newUser(req,res){
        try{
            const newuser = await User.create(req.body);
            return res.status(201).json(newuser); 
        }
        catch(err){
            console.log("user not created :", err)
            res.status(500).json({message:"user not created", error: err.message})
        }
    }

  


}

module.exports = userService;