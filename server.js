require("dotenv").config();

// our express server
const express = require("express");
const connectToDB = require("./databases/db");

const app = express();
const PORT = process.env.PORT || 3000;

// connect to our DB
connectToDB();

// middleware -> express.json()
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
