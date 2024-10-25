const route = require("express").Router();
const {listClient,newClient,updateClient,clientEdit,clientDelete} = require("../controllers/keepcodingClient.controller")


// All list
route.get('/list', listClient);
route.post('/new', newClient);
route.post('/edit/:id', clientEdit);
route.delete('/:id', clientDelete);
route.patch('/update', updateClient);


module.exports = route
