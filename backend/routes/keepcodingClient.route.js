const route = require("express").Router();
const {listClient,newClient,updateClient,clientEdit} = require("../controllers/keepcodingClient.controller")


// All list
route.get('/list', listClient);
route.post('/new', newClient);
route.post('/edit/:id', clientEdit);
route.patch('/update', updateClient);


module.exports = route
