const route = require("express").Router();
const {inputValidation} = require("../middlewares/validation")
const {registerUser} = require("../controllers/user.controller")
const upload = require("../middlewares/multer.middleware")


// Routes
route.get('/list', (req, res) => {
    res.status(200).json({ message: "hello user" });
});

// Use Multer to handle multipart/form-data
route.post('/register', upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'banner', maxCount: 1 }
]), inputValidation, registerUser);

route.post('/login',async(req,res)=>{
    res.status(201).json({'message': "login successful"})
})


module.exports = route
