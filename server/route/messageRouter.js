const express = require("express");
const router = express.Router();
const messagesController = require("../controller/forumController");


router.post("/user", messagesController.messagesUser);
router.post("/:id/commentPost", messagesController.commentPost);
router.get("/", messagesController.getAllMessages);
router.get("/:id", messagesController.getPost);
router.put("/:id", messagesController.updateMessage);
router.delete("/:id", messagesController.deleteMessage);

module.exports = router;