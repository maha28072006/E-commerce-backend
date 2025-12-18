const Book = require("../models/Book");

// GET all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE book
exports.createBook = async (req, res) => {
  console.log("REQ BODY:", req.body);

  const { title, author, price, image, description } = req.body;

  if (!title || !author || !price || !image || !description) {
    return res.status(400).json({
      message: "All fields are required",
      received: req.body
    });
  }

  try {
    const book = await Book.create({
      title,
      author,
      price,
      image,
      description
    });

    res.status(201).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};