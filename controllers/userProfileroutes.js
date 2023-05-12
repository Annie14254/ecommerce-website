const router = require('express').Router();
const { Book, Genre, User } = require('../models');
const sequelize = require("../config/connection")
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all books with associated genre, by user id for owned_books
      const bookData = await Book.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
              model: Genre,
              attributes: ['id', 'genre_name']
            }
          ],
        });
  
      // Serialize data
      const books = bookData.map((book) => book.get({ plain: true }));
      console.log(books)
  
      // Pass into template for profile
      res.render('profile', { 
        books, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });