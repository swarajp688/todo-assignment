const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());

async function mongoConnect (){
    try {
        await mongoose.connect(MONGO_URL);
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