const bcrypt = require('bcrypt');


const hashPassword = async(text)=>{
   try{
        return await bcrypt.hash(text, 10)
    }
    catch(err){
        console.log(err)
    }
}

const verifyPassword = async(loginPass, dbPass)=>{
    try{
        return await bcrypt.compare(loginPass, dbPass);
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports = {hashPassword,verifyPassword}
