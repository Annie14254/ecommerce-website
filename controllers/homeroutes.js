const router = require('express').Router();
const { User, Book, Genre } = require('../models');
const sequelize = require("../config/connection")
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all books with associated genre
      const bookData = await Book.findAll({
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
  
      // Pass into template for homepage
      res.render('homepage', { 
        books, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });