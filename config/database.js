require('dotenv').config();
const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:/employeedata';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Get default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)

db.on('error', console.error.bind(console, 'MongoDB connection'))
db.once('open', () => {
  console.log('MongoDB connection successful');
});
module.exports =db
