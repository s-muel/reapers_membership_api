
require('dotenv').config();
const { response, request } = require('express');
const express = require('express');
const app = express();
//importing mongoose 
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/membersController');
const membersController = require('./controllers/membersController');

app.use(express.json());

const PORT = process.env. PORT || 5011

app.get('/',(req,res)=>{
res.status(200).json({message:"hello Reapers API"})
});

app.post('/members',membersController.addmembers);


app.get ('/members',membersController.getAllmembers);
app.patch('/members/:membersId',membersController.updateById);
app.delete('/members/:membersId',membersController.deleteById);
app.get('/members/:membersId',membersController.getAllMembersId);


// listening to request on localhost port 5010
app.listen(PORT,() => {
    console.log("My server is Up and running on Port:",PORT);
    // connecting to the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        // console.log("DataBase not connect",error);
        console.log(`DataBase not connected ${error}`);
    });
});

