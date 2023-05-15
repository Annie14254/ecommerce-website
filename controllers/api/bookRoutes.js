const router = require("express").Router();
const { Book } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const bookData = await Book.findAll();
    res.status(200).json(bookData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const newBookData = await Book.create({
     ...req.body,
     user_id: req.session.user_id
    });

   res.status(200).json(newBookData)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


module.exports = router;
