require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT
const app = express();


// Parse application/json (for JSON data)
app.use(express.json());


// For form-urlencoded data parsing (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));


//routes
const UserRoute = require("./routes/user.route")
const DonerRoute = require("./routes/doner.route")

//db
const connectDB = require("./db/db")
connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log('Server running on port '+ PORT)
        app.use("/user", UserRoute)
        app.use("/doner", DonerRoute)
    })
})
.catch((err)=>{
    console.log('mongo db connection fail.')
})




