const router = require("express").Router();
const login = require("./loginRoutes");
const messages = require("./messageRoutes");
const jobs = require("./jobRoutes");
const profile = require("./profileRoutes");

router.use("/login", login);
router.use("/messages", messages);
router.use("/jobs", jobs);
router.use("/profile", profile);
module.exports = router;
