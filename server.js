const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const connectDB = require("./config/db");
// config file
dotenv.config({ path: "./config/config.env" })

//database connection
connectDB()

const app = express()

// cors
app.use(cors())

//body parser
app.use(express.json({ extended: false }))



//routes
app.use('/api/v1/courses', require('./routes/course'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Started on ${process.env.PORT}`)
})


