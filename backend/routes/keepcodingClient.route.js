const route = require("express").Router();
const {listClient,newClient,updateClient} = require("../controllers/keepcodingClient.controller")


// All list
route.get('/list', listClient);
route.post('/new', newClient);
route.patch('/update', updateClient);


module.exports = route
