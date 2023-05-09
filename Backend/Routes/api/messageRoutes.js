const router = require("express").Router();
const {
  User,
  Inbox,
  MessageThread,
  ChatMessage,
} = require("../../Models/index");

// gets all Message Threads by user_id
router.get("/:user_id", async (req, res) => {
  let user_id = req.params.user_id;
  let threads = await User.findOne({
    where: {
      user_id: user_id,
    },
    attributes: ["name"],
    include: [
      {
        model: Inbox,
        attributes: ["inbox_id", "user_id"],
        include: [
          {
            model: MessageThread,
            attributes: ["thread_id"],
            include: [
              {
                model: User,
                attributes: ["user_id", "name", "email", "phone"],
              },
              {
                model: ChatMessage,
                limit: 1,
                attributes: ["createdAt", "text", "message_id"],
                order: [["message_id", "ASC"]],
              },
            ],
          },
        ],
      },
    ],
  }).catch((err) =>
    console.log("error getting message threads by user id.\nYour Error: ", err)
  );

  // let plainThreads = threads.get({ plain: true });
  if (!threads) {
    return res
      .status(404)
      .json({ err: "there was an error retrieving chat threads" });
  }
  console.log("my threads: ", threads);
  // let plainThreads = threads.map((thread) => thread.get({ plain: true }));
  // console.log("my plain thread: ", plainThreads);
  // console.log("chat messages: ", plainThreads[0].chat_messages);

  return res.status(200).json(threads);
});

// gets all chat messages by thread_id
router.get("/thread/:thread_id", async (req, res) => {
  let messages = null;
  let id = req.params.thread_id;
  console.log("sent");
  try {
    messages = await MessageThread.findOne({
      where: {
        thread_id: id,
      },
      include: [
        {
          model: ChatMessage,
          order: [["createdAt", "DESC"]],
        },
      ],
    }).catch((err) =>
      res.status(500).json({ err: "Error retrieving threads from database" })
    );

    if (!messages) {
      res.status(404).json({ err: "No thread with that ID found" });
    }

    res.status(200).json(messages);
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error retrieving threads from database", error: err });
  }
});
module.exports = router;
