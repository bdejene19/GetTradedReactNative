const router = require("express").Router();
const login = require("./loginRoutes");
const messages = require("./messageRoutes");
const jobs = require("./jobRoutes");

router.use("/login", login);
router.use("/messages", messages);
router.use("/jobs", jobs);

module.exports = router;
