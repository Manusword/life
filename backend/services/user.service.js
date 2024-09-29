const User = require('../models/user.model')

class userService {

    //insert new user
    async newUser(req,res){
        try{
            return await User.create(req.body)
        }
        catch(err){
            console.log("user not created :", err)
            res.status(500).json({message:"user not created :"})
        }
    }

}

module.exports = userService;