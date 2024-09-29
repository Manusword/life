const route = require("express").Router();
const {newDoner,listDoner} = require("../controllers/doner.controller")


// All list
route.get('/list', listDoner);

// Use Multer to handle multipart/form-data
route.post('/new', newDoner);


module.exports = route
