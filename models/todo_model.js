const mongoose = require("mongoose");
const db = require("../config/db");
const UserModel = require("../models/user_model");
const { Schema } = mongoose;

const todoScheme = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: UserModel.modelName,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const TodoModel = db.model("todos", todoScheme);
module.exports = TodoModel;
