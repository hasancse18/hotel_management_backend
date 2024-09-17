const mongoose = require('mongoose');

//const mongoUrl ='mongodb://localhost:27017/hotels';
const mongoUrl = 'mongodb+srv://hasancse:hasancse@cluster0.ckt9f.mongodb.net/'

mongoose.connect(mongoUrl)

const DB = mongoose.connection;

DB.on('connected',()=>{
    console.log("yessssss");
})

DB.on('disconnected',()=>{
    console.log("Disconnected")
})

module.exports = DB;