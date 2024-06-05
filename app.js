const express = require("express");
const userRouter = require("./routes/user_router");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/", userRouter);

module.exports = app;
