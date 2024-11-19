const jwt = require('jsonwebtoken');
const jwtToken = process.env.ACCESS_TOKEN_SECRET;
const jwtqxp = process.env.ACCESS_TOKEN_EXPIRY;


const jwtCreateToken = async (id,name)=>{
    return await jwt.sign({
        'id':id,
        'name':name
      }, 
      jwtToken, 
      { expiresIn: jwtqxp });
}

module.exports = {jwtCreateToken}



