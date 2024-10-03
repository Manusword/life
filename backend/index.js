require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT
const cors = require('cors');
const app = express();

// Use the cors middleware and specify the allowed origins
app.use(cors({
    origin: 'http://localhost:3000',  // Allow your React app
    credentials: true,  // If you're using cookies, set credentials to true
  }));
// Alternatively, allow requests from any origin (less secure, but useful for development)
app.use(cors());

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




