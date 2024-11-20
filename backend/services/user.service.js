const User = require('../models/user.model')

class userService {

    //insert new user
    async newUser(data){
        try{
            const newuser = await User.create(data);
            return await User.findOne({_id:newuser._id})
            //return await User.findOne({_id:newuser._id}).select("-password -refreshToken")
        }
        catch(err){
            throw err;
        }
    }


    //find with mobile no 
    async mobileFind(mobile){
        try{
            const foundUser = await User.findOne({'mobile':mobile})
            return foundUser; 
        }
        catch(err){
            throw err;
        }
    }


}

module.exports = userService;