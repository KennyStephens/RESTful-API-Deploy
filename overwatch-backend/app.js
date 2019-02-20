const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const overwatchRouter = require('./routes/overwatch.routes');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
  useNewUrlParser: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', overwatchRouter);

mongoose.connect('mongodb+srv://kenkneesteefens:Nodecourse@cluster0-drydi.mongodb.net/overwatch', {
  useNewUrlParser: true
}, () => {
  app.listen(5000, () => {
    console.log('Server is Running on port 5000');
  });
});