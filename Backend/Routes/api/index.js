const router = require("express").Router();
const login = require("./loginRoutes");
const messages = require("./messageRoutes");

router.use("/login", login);
router.use("/messages", messages);

module.exports = router;
