const Doner = require('../models/doner.model');

class DonerService {

    // Insert new doner
    async insertNewDoner(data) {
        try {
            const doner = await Doner.create(data); 
            return await Doner.findOne({_id:doner._id})
        } catch (err) {
            throw err;
        }
    }
    
    // Insert new doner
    async newDoner(req, res) {
        try {
            const doner = await Doner.create(req.body); 
            return res.status(201).json(doner);  
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
            return res.status(500).json({ message: "Doner not created", error: err.message });
        }
    }

    //all doner list
    async donerList (req, res){
        try{
            const doner = await Doner.find();  
            return res.status(201).json(doner);  
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



}

module.exports = DonerService;
