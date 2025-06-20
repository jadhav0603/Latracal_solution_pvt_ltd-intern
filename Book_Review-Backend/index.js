const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT


const UserRoutes = require('./Routes/user.routes')


app.use(express.json())
app.use(cors())


app.use('/',UserRoutes)


app.listen(PORT,()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("server successfully connected to MONGO-DB")
    } catch (error) {
        console.log(error)    
    }
    console.log(`server successfully running on ${PORT}`)
    
})


