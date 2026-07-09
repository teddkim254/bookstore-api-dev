const mongoose = require("mongoose");

// create our connection
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
