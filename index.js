require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express()

app.listen(PORT, () => {
    console.log("App is listening on port 3002");
    mongoose.connect(URL)
    console.log("DB connection established")
});



