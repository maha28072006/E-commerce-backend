const express = require("express");
const {
  getBooks,
  createBook
} = require("../controller/bookController");

const router = express.Router();

router.get("/", getBooks);
router.post("/", createBook);

module.exports = router;
