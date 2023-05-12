const router = require("express").Router();
const { User, Book, Genre } = require("../models");
/* const sequelize = require("../config/connection");
const withAuth = require("../utils/auth"); */

router.get("/", async (req, res) => {
  try {
    const bookData = await Book.findAll();
    const books = bookData.map((book) => book.get({ plain: true }));
    console.log(books);
    res.status(200).render("products", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


      // Serialize data 
      const books = bookData.map((book) => book.get({ plain: true }));
      console.log(books)
  
      // Pass into template for homepage
      res.render('homepage', { 
        books, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/:id", async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);
    const book = bookData.get({ plain: true });
    console.log(book);
    res.status(200).render("book", { book });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
      const book = bookData.get({ plain: true });
  
      res.render('book', {
        ...book,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Use withAuth middleware to prevent access to route
  router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Book }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      console.log(err)
      res.status(500).send({msg: err});
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;

