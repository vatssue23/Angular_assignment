const express = require('express');
const mongoose = require('mongoose');
const blogrouter = require('./routes/blog');
const blogs = require('./model/schema');
const bodyparser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
});


app.use(express.json());

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/blog', blogrouter);
module.exports = app;
