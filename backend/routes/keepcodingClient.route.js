const route = require("express").Router();
const {listClient,newClient} = require("../controllers/keepcodingClient.controller")


// All list
route.get('/list', listClient);
route.post('/new', newClient);


module.exports = route
