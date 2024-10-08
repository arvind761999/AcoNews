const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo connected!!!!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
