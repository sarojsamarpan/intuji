const mongoose = require("mongoose");
require("dotenv").config();

const DB = () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("database connected!");
  } catch (error) {
    console.log("database connection failed");
  }
};

module.exports = DB;
