const DonerService = require('../services/doner.service');
const donerDb = new DonerService();


const listDoner = async (req, res) => {
    try {
        await donerDb.donerList(req, res)
    } catch (err) {
        return res.status(500).json({ message: "Doner not found. Something went wrong", error: err.message });
    }
}


const newDoner = async (req, res) => {
    try {
        await donerDb.newDoner(req, res);
    } catch (err) {
        return res.status(500).json({ message: "Doner not found. Something went wrong", error: err.message });
    }
}


const newDonerViaUserRegister = async (data) => {
    try {
        const saveDoner = await donerDb.insertNewDoner(data);
    } catch (err) {
        return err;
    }
}



module.exports = { newDoner,listDoner,newDonerViaUserRegister};
