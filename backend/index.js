require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT
const cors = require('cors');
const app = express();


// Use the cors middleware and specify the allowed origins
app.use(cors({
    //origin: 'http://localhost:3000',  // Allow your React app
    origin: ['http://localhost:3000', 'https://life-mu-nine.vercel.app'],
    credentials: true,  // If you're using cookies, set credentials to true
  }));
// Alternatively, allow requests from any origin (less secure, but useful for development)
//app.use(cors());

// Parse application/json (for JSON data)
app.use(express.json());
app.use(cookieParser());


// For form-urlencoded data parsing (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));


//routes
const UserRoute = require("./routes/user.route")
const DonerRoute = require("./routes/doner.route")
const keepcodingRoute = require("./routes/keepcodingClient.route")

//db
const connectDB = require("./db/db")
connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log('Server running on port '+ PORT)
        app.use("/user", UserRoute)
        app.use("/doner", DonerRoute)
        app.use("/keepcoding/clients", keepcodingRoute)
    })
})
.catch((err)=>{
    console.log('mongo db connection fail.')
})




