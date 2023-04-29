const router = require("express").Router();
const {
  User,
  Inbox,
  MessageThread,
  WorkImage,
  WorkLocation,
} = require("../../Models/index");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
      include: [
        { model: WorkLocation, attributes: ["location_id", "name"] },
        { model: WorkImage, attributes: ["image_id", "file_path"] },
        { model: Inbox, attributes: ["inbox_id"] },
      ],
    });

    if (!user) {
      return res.json({ err: "User not found" });
    }

    const valid = bcrypt.compare(user.password, req.body.password);
    console.log(valid);
    if (!valid) {
      return res.status(404).json({ err: "User not found" });
    }
    if (valid) {
      // let messageThreads = await MessageThread.findAll({
      //   where: {
      //     inbox_id: user.inbox.inbox_id,
      //   },
      // });
      res.status(200).json(user);
    }
  } catch (e) {
    return res.json(e);
  }
});

module.exports = router;
