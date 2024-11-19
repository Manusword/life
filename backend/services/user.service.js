const User = require('../models/user.model')

class userService {

    //insert new user
    async newUser(data){
        try{
            const newuser = await User.create(data);
            return await User.findOne({_id:newuser._id}).select("-password -refreshToken")
        }
        catch(err){
            throw err;
        }
    }


    //find mobile no
    async mobileFind(mobile){
        try{
            const newuser = await User.find({'mobile':mobile})
            return newuser; 
        }
        catch(err){
            throw err;
        }
    }

  


}

module.exports = userService;