const router = require("express").Router();
const { User, WorkImage, WorkLocation } = require("../../Models/index");

// profile routes are primarily used for getting initial page data, and sending put requests
// retrieves initial data for user data, work locations, and work images

// getting user data
router.get("/:user_id", async (req, res) => {
  let id = req.params.user_id;
  console.log("getting users ran: ");
  try {
    const user = await User.findOne({
      where: {
        user_id: id,
      },
    }).catch((err) =>
      res
        .status(500)
        .json({ msg: "error retrieving user from SQL database", err })
    );

    if (!user) {
      return res
        .status(404)
        .json({ msg: "Unable to find user from server request", err });
    }
    return res.status(200).json(user);
  } catch (e) {
    res.status(404).json({ msg: "error retrieivng user from server", e });
  }
});

// get work images data by user_id
router.get("/workImages/:user_id", async (req, res) => {
  const id = req.params.user_id;
  try {
    const imgs = WorkImage.findAll({
      where: {
        user_id: id,
      },
    }).catch((err) =>
      res.status(500).json({ msg: "Error finding work images by user_id", err })
    );

    if (!imgs) {
      return res
        .status(404)
        .json({ msg: "Server request unable to find work images" });
    }
    return res.status(200).json(imgs);
  } catch (e) {
    return res
      .status(404)
      .json({ msg: "Server request unable to find work images", e });
  }
});

// get work location data by user_id
router.get("/locations/:user_id", async (req, res) => {
  const id = req.params.user_id;
  try {
    const imgs = WorkLocation.findAll({
      where: {
        user_id: id,
      },
    }).catch((err) =>
      res
        .status(500)
        .json({ msg: "Error finding work location by user_id", err })
    );

    if (!imgs) {
      return res
        .status(404)
        .json({ msg: "Server request unable to find work locations" });
    }
    return res.status(200).json(imgs);
  } catch (e) {
    return res
      .status(404)
      .json({ msg: "Server request unable to find work locations", e });
  }
});
module.exports = router;
