const mongoose = require("mongoose");
require("dotenv").config();

// Mongodb configuration
const connection = mongoose.connect(process.env.MONGODB_URL);

// Event listener:When MongoDB connection is established
mongoose.connection.on("connected", () => {
  console.log("Connection established ");
});
// Event listener: When MongoDB connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Connection disestablished");
});

// Event listener: Handle MongoDB connection errors
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

module.exports = {
  connection,
};
