const express = require("express");
const userRouter = require("./routes/user_router");
const todoRouter = require('./routes/todo_routes');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/", todoRouter);

module.exports = app;
