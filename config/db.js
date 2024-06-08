const mongoose = require("mongoose");
require("dotenv").config();

// Database
const database = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(process.env.MONGO_URI, connectionParams)
    .then(() => console.log("Successfully connected to MongoDB Atlas!"))
    .catch((error) =>
      console.error("Error connecting to MongoDB Atlas: ", error)
    );
};
database();

module.exports = mongoose;
