import ChatMessage from "../models/ChatMessage";

export async function saveMessage(
  req: any,
  res: any
) {
  try {
    const exists =
      await ChatMessage.findOne({
        sender: req.body.sender,
        message: req.body.message,
        timestamp: req.body.timestamp,
      });

    let chat = exists;

    if (!exists) {
      chat = await ChatMessage.create(
        req.body
      );
    }

    res.json(chat);
  } catch (error) {
    res.status(500).json({
      error:
        "Failed to save message",
    });
  }
}

export async function getMessages(
  req: any,
  res: any
) {
  try {
    const messages =
      await ChatMessage
        .find()
        .sort({
          createdAt: 1,
        });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      error:
        "Failed to load messages",
    });
  }
}