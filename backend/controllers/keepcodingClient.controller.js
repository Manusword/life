const keepcodingClientService = require('../services/keepcodingClient.service');
const clientDb = new keepcodingClientService();


const listClient = async (req, res) => {
    try {
        await clientDb.clientList(req, res)
    } catch (err) {
        return res.status(500).json({ message: "Client not found. Something went wrong", error: err.message });
    }
}



const newClient = async (req, res) => {
    try {
        await clientDb.newClient(req, res);
    } catch (err) {
        return res.status(500).json({ message: "Doner not found. Something went wrong", error: err.message });
    }
}



module.exports = { listClient,newClient };
