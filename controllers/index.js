const router = require("express").Router();
const api = require("./api");
const homepage = require("./homeroutes");
const userpage = require("./userProfileroutes");

router.use("/api", api);
router.use("/", homepage);
router.use("/user", userpage);

module.exports = router;
