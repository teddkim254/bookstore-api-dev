require("dotenv").config();

// OUR EXPRESS SERVER...
const express = require("express");
const connectToDB = require("./databases/db");
const booksRoutes = require("./routes/book-routes");

const app = express();
const PORT = process.env.PORT || 3000;

// connect to our DB
connectToDB();

// Built-in Express middleware for parsing JSON
app.use(express.json());

// routes here
app.use("/api/books", booksRoutes); // eg. /api/books/delete/4567rt

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
