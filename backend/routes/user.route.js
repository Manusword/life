const route = require("express").Router();
const {inputValidation} = require("../middlewares/validation")
const {registerUser,loginUser} = require("../controllers/user.controller")
const upload = require("../middlewares/multer.middleware")


// Routes
route.get('/list', (req, res) => {
    res.status(200).json({ message: "hello user" });
});

// Use Multer to handle multipart/form-data
route.post('/register', inputValidation, registerUser);

route.post('/login',loginUser)


module.exports = route

