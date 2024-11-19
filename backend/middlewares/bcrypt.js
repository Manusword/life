const bcrypt = require('bcrypt');
const saltRounds = 10;


const hashPassword = async(text)=>{
    return await bcrypt.hash(text, saltRounds)
}


module.exports = {hashPassword}

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });