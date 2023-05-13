const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bookRoutes = require("./bookRoutes");
const genreRoutes = require("./genreRoutes")

router.use("/users", userRoutes);
router.use("/books", bookRoutes);
router.use("/genres", genreRoutes);

module.exports = router;
