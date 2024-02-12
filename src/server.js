// server.js

//server set up
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/db');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 8001;

//incoming requests
app.use(bodyParser.json());
app.use('/api', routes);

//listening on Port 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

