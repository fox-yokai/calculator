require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const calcRouter = require('./routes/calculations');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

// connect to the Mongo DB
mongoose.connect(process.env.MONGO_URI, 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));

const con = mongoose.connection;

con.on('open', () =>
    console.log('==> Database connected...')
);

// middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// webpage routing
app.use('/calculations', calcRouter);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

// starts the express server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);