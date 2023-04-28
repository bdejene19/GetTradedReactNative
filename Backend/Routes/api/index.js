const router = require("express").Router();
const login = require("./loginRoutes");

router.use("/login", login);

module.exports = router;
