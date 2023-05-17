const router = require("express").Router();
const { User, Book, Genre } = require("../models");

const sequelize = require("../config/connection");

const { withAuth, slice } = require("../utils/auth");

// Starting homepage
router.get("/", async (req, res) => {
  console.log(req.session.logged_in);
  try {
    const bookData = await Book.findAll({
      order: sequelize.literal("RAND()"),
    });
    const books = bookData.map((book) => book.get({ plain: true }));
    /* console.log(books); */
    res.status(200).render("homepage", {
      books,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/book/:id", withAuth, async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);
    console.log(bookData);
    const book = bookData.get({ plain: true });
    /*   console.log(book); */
    res.status(200).render("book", { book, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/classic", async (req, res) => {
  try {
    const genreData = await Book.findAll({
      where: { genre_id: 1 },
      include: { model: Genre },
    });
    /*    console.log(genreData); */
    const books = genreData.map((book) => book.get({ plain: true }));
    /*   console.log(books[1].genre.genre_name);
    console.log(books); */
    res.status(200).render("homepage", {
      books,
      genre: books[0].genre.genre_name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/sciencefiction", async (req, res) => {
  try {
    const genreData = await Book.findAll({
      where: { genre_id: 2 },
      include: { model: Genre },
    });
    /*  console.log(genreData); */
    const books = genreData.map((book) => book.get({ plain: true }));
    /*  console.log(books[1].genre.genre_name);
    console.log(books); */
    res.status(200).render("homepage", {
      books,
      genre: books[0].genre.genre_name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/history", async (req, res) => {
  try {
    const genreData = await Book.findAll({
      where: { genre_id: 3 },
      include: { model: Genre },
    });
    /*   console.log(genreData); */
    const books = genreData.map((book) => book.get({ plain: true }));
    /*   console.log(books[1].genre.genre_name);
    console.log(books); */
    res.status(200).render("homepage", {
      books,
      genre: books[0].genre.genre_name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/biographies", async (req, res) => {
  try {
    const genreData = await Book.findAll({
      where: { genre_id: 4 },
      include: { model: Genre },
    });
    /*     console.log(genreData); */
    const books = genreData.map((book) => book.get({ plain: true }));
    /*    console.log(books[1].genre.genre_name);
    console.log(books); */
    res.status(200).render("homepage", {
      books,
      genre: books[0].genre.genre_name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/account", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    /* console.log(books); */
    console.log(user);
    const userData = user.get({ plain: true });
    console.log(userData);
    res
      .status(200)
      .render("profile", { logged_in: req.session.logged_in, userData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/account/newbook", async (req, res) => {
  try {
    /* console.log(books); */
    res.status(200).render("newBook", { logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/account/newgenre", async (req, res) => {
  try {
    /* console.log(books); */
    res.status(200).render("newGenre", { logged_in: req.session.logged_in });
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
