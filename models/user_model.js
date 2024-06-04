const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    email : {
        type : String,
        lowercase : true,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
});
const Usermodel = db.model('user',userSchema);

module.exports = Usermodel;