const router = require("express").Router();
const { User } = require("../../Models/index");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log("my user: ", user);

    if (!user) {
      return res.json({ err: "User not found" });
    }

    const valid = bcrypt.compare(user.password, req.body.password);
    console.log(valid);
    if (!valid) {
      return res.status(404).json({ err: "User not found" });
    }
    if (valid) {
      res.status(200).json(user);
    }
  } catch (e) {
    return res.json(e);
  }
});

module.exports = router;
