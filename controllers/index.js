const router = require("express").Router();
const api = require("./api");
const homepage = require("./homeroutes");

router.use("/api", api);
router.use("/", homepage);

module.exports = router;
