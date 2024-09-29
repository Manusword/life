



const inputValidation = (req, res, next) => {
    console.log(req.body);
    console.log(req.headers['content-type']);
   

    const { fullname, address, blood, mobile, password } = req.body;

    if (!fullname || !address || !blood || !mobile || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    next();
};

module.exports = {inputValidation};