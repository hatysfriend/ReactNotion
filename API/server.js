const express = require('express'); //import package
const mongoose  = require('mongoose'); 
const {MONGO_URI} =require('./config');//import connection string
const postRoutes = require('./routes/api/posts');//Routes

const app = express();//excute package

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server run at port ${PORT}`));

//body perser middleware
app.use(express.json());

//connect to mongoDB
mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err))

//user routes
app.use('/api/posts', postRoutes);





//1 import express, mongoose, connectionStringURI, postFunctions, router, modelObj
//2 creating main app
//3 connect to the URI
//4 set router to the app feature

//mongoose
// - makign connection
// - create obj's blueprint

//express
//- can have a set of application features
//- can hold router

//https:cloud.mongodb.com/v2/60105086c4cf90557a9a3a71#metrics/replicaSet/601051dfea466f43ad5b89fd/explorer/describers/posts/find