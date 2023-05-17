const { withAuth, slice } = require("../utils/auth");
const { User, Cart, Book } = require("./../models");
const router = require("express").Router();
const sequelize = require("../config/connection");
// const { Book, Genre, User } = require('../models');
// const sequelize = require("../config/connection")
// const withAuth = require('../utils/auth');

// Use withAuth middleware to prevent access to route
router.get("/profile", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    /* const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Book }],
    });

    const user = userData.get({ plain: true }); */

    res.render("profile", {
      logged_in: req.session.logged_in,
      /*   ...user,
      logged_in: true, */
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err });
  }
});

router.get("/profile/newBook", async (req, res) => {
  try {
    //     // Find the logged in user based on the session ID
    //   const userData = await User.findByPk(req.session.user_id, {
    //     attributes: { exclude: ['password'] },
    //     include: [{ model: Book }],
    //   });

    //   const user = userData.get({ plain: true });
    console.log("NEWBOOKNEWBOOKNEWBOOK");
    res.render("newBook", {
      logged_in: req.session.logged_in,
      // ...user,
      // logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

router.get("/profile/newGenre", async (req, res) => {
  try {
    //     // Find the logged in user based on the session ID
    //   const userData = await User.findByPk(req.session.user_id, {
    //     attributes: { exclude: ['password'] },
    //     include: [{ model: Book }],
    //   });

    //   const user = userData.get({ plain: true });

    res.render("newGenre", {
      // ...user,
      // logged_in: true
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

router.get("/login", (req, res) => {
  console.log(req.query.login);
  res.render("login", {
    loginFailed: req.query?.login === "failed",
    logged_in: req.session.logged_in,
  });
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  /*   if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  } */

  res.render("signup", { user: req.session.user_id });
});

router.get("/cart", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  const user = await User.findByPk(req.session.user_id, {
    include: [{ model: Book, through: Cart, as: "carts_with_books" }],
  });
  console.log({ userlololol: user });
  /* const userPosts = await User.getBlogPosts(req.session.user_id); */
  /*   const userBooks = await Cart.findAll({
    where: {
      user_id: req.session.user_id,
    },
  }); */
  const userData = user.get({ plain: true });
  /* const userData = user.map((userpost) => userpost.get({ plain: true }));  */
  console.log({ userDataqaqaqaqa: userData.carts_with_books });
  /* console.log(cartBooks); */
  res.render("cart", {
    bookdata: userData.carts_with_books,
    logged_in: req.session.logged_in,
    user: req.session.user_id,
  });
});

router.post("/cart/insert", async (req, res) => {
  let bookId = req.body.bookId;

  const cartItem = await Cart.create(
    {
      book_id: parseInt(bookId),
      user_id: req.session.user_id,
    },
    {
      fields: ["book_id", "user_id"],
    }
  );
  console.log(cartItem);
});

router.post("/cart/clear", async (req, res) => {
  try {
    const userId = req.session.user_id;

    // Find the user and include the associated books
    const query = `DELETE book
   FROM book
   JOIN cart ON cart.book_id = book.id
   WHERE cart.user_id = ${userId};`;

    await sequelize.query(query, {
      type: sequelize.QueryTypes.DELETE,
    });
    console.log("THISISWORKINGTHISOURWORKING");

    res.redirect("/account");
    console.log("THISISWORKINGTHISOURWORKING");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
