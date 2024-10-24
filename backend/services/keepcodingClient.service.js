const Client = require('../models/keepcodingClient.model');

class keepcodingClientService {
    
    //all Client list
    async clientList (req, res){
        try{
            const clients = await Client.find();  
            console.log(clients)
            return res.status(201).json(clients);  
        }
        catch(err){
            return res.status(400).json({
                message: "Somthing went wrong",
                errors: Object.keys(err.errors).map(field => ({
                    field,
                    message: err.errors[field].message
                }))
            });
        }
    }

    // Insert new client
    async newClient(req, res) {
        try {
            const client = await Client.create(req.body); 
            return res.status(201).json(client);  
        } catch (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).json({
                    message: "Validation failed",
                    errors: Object.keys(err.errors).map(field => ({
                        field,
                        message: err.errors[field].message
                    }))
                });
            }
            return res.status(500).json({ message: "Client not created", error: err.message });
        }
    }//function close


    // Insert update client
    async updateClient(req, res) {
        try {
            const {id,fieldname,value} = req.query;
            const filter = { _id: id };
            const update = { [fieldname]: value };
            const client = await Client.findOneAndUpdate(filter, update, {
                new: true
            }); 
            return res.status(201).json(client);  
        } 
        catch(err){
            return res.status(400).json({
                message: "Update Fail",
                errors: Object.keys(err.errors).map(field => ({
                    field,
                    message: err.errors[field].message
                }))
            });
        }
   }//function close

}

module.exports = keepcodingClientService;
