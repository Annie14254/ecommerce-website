const router = require("express").Router();
const { Genre } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const genreData = await Genre.findAll();
    res.status(200).json(genreData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newGenreData = await Genre.create({
     ...req.body,
     user_id: req.session.user_id
    });

   res.status(200).json(newGenreData)
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
