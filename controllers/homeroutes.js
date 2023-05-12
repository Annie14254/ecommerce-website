const router = require("express").Router();
const { User, Book, Genre } = require("../models");

const sequelize = require("../config/connection");
/*
const withAuth = require("../utils/auth"); */

// Starting homepage
router.get("/", async (req, res) => {
  try {
    const bookData = await Book.findAll({
      order: sequelize.literal("RAND()"),
    });
    const books = bookData.map((book) => book.get({ plain: true }));
    /* console.log(books); */
    res.status(200).render("products", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/book/:id", async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);
    console.log(bookData);
    const book = bookData.get({ plain: true });
    console.log(book);
    res.status(200).render("book", { book });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/classic", async (req, res) => {
  try {
    const genreData = await Book.findAll({
      where: { genre_id: 1 },
    });
    /*   console.log(genreData); */
    const books = genreData.map((book) => book.get({ plain: true }));
    console.log(books);
    res.status(200).render("products", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/sciencefiction", async (req, res) => {
  try {
    const genreData = await Book.findAll({
      where: { genre_id: 2 },
    });
    /*  console.log(genreData); */
    const books = genreData.map((book) => book.get({ plain: true }));
    console.log(books);
    res.status(200).render("products", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/history", async (req, res) => {
  try {
    const genreData = await Book.findAll({
      where: { genre_id: 3 },
    });
    /*    console.log(genreData); */
    const books = genreData.map((book) => book.get({ plain: true }));
    console.log(books);
    res.status(200).render("products", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/biographies", async (req, res) => {
  try {
    const genreData = await Book.findAll({
      where: { genre_id: 4 },
    });
    /* console.log(genreData); */
    const books = genreData.map((book) => book.get({ plain: true }));
    console.log(books);
    res.status(200).render("products", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* 
router.get("/", async (req, res) => {
  try {
    // Get all books with associated genre
    const bookData = await Book.findAll({
      include: [
        {
          model: Genre,
          attributes: ["id", "genre_name"],
        },
      ],
    });
 */
// Serialize data
/*  const books = bookData.map((book) => book.get({ plain: true }));
    console.log(books);

    // Pass into template for homepage
    res.render("homepage", {
      books,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
 */
module.exports = router;
