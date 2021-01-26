//----database & server are prepared

require('dotenv').config() 

const express = require('express') //1. scan 'express libraries'
const app = express()              //2. create app using express()

app.listen(8080, ()=>console.log('server started')) //3.


const mongoose = require('mongoose') //scan mongoose
mongoose.connect(process.env.DATABASE_URL,
    {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection               //build mongoose connection variable
db.on('error', (error)=>console.error(error))   //see log if has error
db.once('open', ()=>console.log('connected to database'))  //open connection



//--- making server excepect json file 

app.use(express.json())
console.log(express.json())

const subscribersRouter = require('./routes/subscribers') //scan subscriber file
app.use('./subscribers', subscribersRouter)   //set the file to the app


 