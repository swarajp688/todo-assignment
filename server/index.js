const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());

async function mongoConnect (){
    try {
        // connect to assignment database
        await mongoose.connect(MONGO_URL);
        // await mongoose.connect(MONGO_URL,function(err,database){
            
        // });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}
const startServer = async () => {
    await mongoConnect();
    app.listen(3000, () => {
        console.log('listening on port 3000');
        }
    );
}
startServer();