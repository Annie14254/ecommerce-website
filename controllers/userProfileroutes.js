const router = require("express").Router();
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
      /*   ...user,
      logged_in: true, */
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err });
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  /*   if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  } */

  res.render("signup");
});

router.post("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  /*   if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  } */

  res.render("signup");
});

module.exports = router;
