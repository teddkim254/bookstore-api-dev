const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/book-controller");

// create our express router
const router = express.Router();

// create all the routes related to books only
router.get("get", getAllBooks);
router.get("/get/:id", getSingleBookById);
router.post("/add", addNewBook);
router.put("/update/:id", updateBookById);
router.delete("/delete/:id", deleteBookById);

router.get("path", (req, res) => {});

module.exports = router;
