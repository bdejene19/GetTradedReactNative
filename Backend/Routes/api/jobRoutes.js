const router = require("express").Router();
const sequelize = require("../../config/connection");
const { JobPost, User } = require("../../Models/index");
// get job posts by job type
router.get("/:job_type", async (req, res) => {
  let jobType = req.params.job_type;
  try {
    let jobTypeArr = await JobPost.findAll({
      where: {
        job_type: jobType,
      },
      include: [{ model: User }],
    }).catch((err) =>
      res.status(504).json({
        msg: `Error finding job posts in DB, of type: ${jobType}`,
        err,
      })
    );
  } catch (err) {
    res.status(404).json({ msg: "Error finding job types from server", err });
  }
});

module.exports = router;
