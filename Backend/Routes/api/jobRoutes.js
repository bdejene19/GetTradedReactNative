const router = require("express").Router();
const { JobPost, User } = require("../../Models/index");
// get job posts by job type
router.get("/:job_type", async (req, res) => {
  let jobType = req.params.job_type;
  try {
    let jobTypeArr = await JobPost.findAll({
      where: {
        job_type: jobType,
      },
      include: [
        { model: User, attributes: ["name", "email", "phone", "user_id"] },
      ],
    }).catch((err) =>
      res.status(504).json({
        msg: `Error finding job posts in DB, of type: ${jobType}`,
        err,
      })
    );

    if (!jobTypeArr) {
      res.status(404).json({ err: `No jobs found for type: ${jobType}` });
    }
    res.status(200).json(jobTypeArr);
  } catch (err) {
    res.status(404).json({ msg: "Error finding job types from server", err });
  }
});

module.exports = router;
