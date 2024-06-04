const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/todo'); 

module.exports = connection;