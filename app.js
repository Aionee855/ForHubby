
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Mongoose Connect
mongoose.connect('mongodb://localhost/orders');
const db = mongoose.connection;

//Init App
const app = express();
//Port
const port = 3100;

//Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Client Folder
app.use(express.static(__dirname+'/client'));
//Body Parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Please use /api/orders or /api/invoices');
});

//Route Files
const orders = require('./routes/orders');
const invoices = require('./routes/invoices');

//Paths
app.use('/api/orders', orders);
app.use('/api/invoices', invoices);

app.listen(port, () => {
  console.log('Server Started on Port '+port);
});
