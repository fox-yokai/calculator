const express = require("express");
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

// connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/calculations', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const con = mongoose.connection;

con.on('open', function(){
    console.log('==> Database connected...')
});

// webpage routing
app.get('/', function (req, res) {
    res.send('Hello World')
  })

// starts the express server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);