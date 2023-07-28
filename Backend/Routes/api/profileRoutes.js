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
router.post("/newUser", async (req, res) => {
  const user = req.body;
  try {
    const newUser = await User.create({
      name: user.name,
      email: user.email,
      phone: user.email,
      password: user.password,
    });

    if (!newUser) {
      console.log("no user");
      return res.status(500).json({ msg: "Unsuccessful in creating new user" });
    }
    const imgsWithID = user.work_images?.map((img) => ({
      ...img,
      user_id: newUser.user_id,
    }));
    const newImages = await WorkImage.bulkCreate(imgsWithID).catch((err) =>
      console.log("my error: ", err)
    );
    console.log("my images: ", newImages);
    if (!newImages) {
      console.log("no images");
      return res.status(500).json({
        msg: "Unsuccessful creating User's related images in database",
      });
    }
    const newLocations = await WorkLocation.bulkCreate([]);
    if (!newLocations) {
      console.log("no location");
      return res.status(500).json({
        msg: "Unsuccessful creating User's related locations in database",
      });
    }

    return res.status(200).json(newUser);
  } catch (e) {}
});
router.put("/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  const newContact = req.body;
  console.log("my new contact: ", newContact);
  try {
    const userEditing = await User.findOne({
      where: {
        user_id: user_id,
      },
    }).catch((e) =>
      res.status(500).json({ msg: "Error finding user to edit", e })
    );

    if (userEditing) {
      const editContact = await userEditing.update({
        ...newContact,
      });
      console.log("my edit contact server : ", editContact);
      if (!editContact) {
        return res
          .status(505)
          .json({ msg: "Error updating user in MySQL database" });
      }
      return res.status(200).json(editContact);
    }
  } catch (e) {}
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

router.post("/location/new", async (req, res) => {
  const newLocation = req.body;
  try {
    const createdLocation = await WorkLocation.create(newLocation).catch(
      (err) =>
        res
          .status(500)
          .json({ msg: "Unable to add new location to database", err })
    );

    if (!createdLocation) {
      return res
        .status(404)
        .json({ msg: "Server unable to create new location" });
    }

    return res.status(200).json(createdLocation);
  } catch (err) {
    return res
      .status(505)
      .json({ msg: "Error adding new location via server", err });
  }
});

//delete work location by location_id and user_id
router.delete("/locations/:location_id", async (req, res) => {
  const location_id = req.params.location_id;
  if (location_id) {
    try {
      const newLocations = await WorkLocation.destroy({
        where: {
          location_id: location_id,
        },
      }).catch((err) =>
        res
          .status(500)
          .json({ msg: "Error deleting location from database", err })
      );

      if (!newLocations) {
        return res
          .status(404)
          .json({ msg: "Unable to find location by location_id in server" });
      }

      return res.status(200).json(newLocations);
    } catch (e) {
      res
        .status(404)
        .json({ msg: "Error deleting location in server. Check connection" });
    }
  }
});

// creating new work_image by user_id
router.post("/workImages/new", async (req, res) => {});

// deleting workImage by image_id
router.delete("/workImages/:image_id", async (req, res) => {
  const image_id = req.params.image_id;
  if (image_id) {
    try {
      const deletedImage = await WorkImage.destroy({
        where: {
          image_id: image_id,
        },
      }).catch((err) =>
        res.status(500).json({ msg: "Error deleting image from database", err })
      );

      if (!deletedImage) {
        return res
          .status(404)
          .json({ msg: "Unable to find image by image_id in server" });
      }

      return res.status(200).json(deletedImage);
    } catch (e) {
      res
        .status(404)
        .json({ msg: "Error deleting location in server. Check connection" });
    }
  }
});
module.exports = router;
