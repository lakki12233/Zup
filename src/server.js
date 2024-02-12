// server.js

// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/db');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use('/api', routes);

// Add CORS middleware
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

