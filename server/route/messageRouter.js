const express = require("express");
const router = express.Router();
const messagesController = require("../controller/forumController");


router.post("/user", messagesController.messagesUser);
router.post("/search", messagesController.searchMessagesAutocomplete);
router.post("/:id/commentPost", messagesController.commentPost);
router.get("/all", messagesController.getAllMessages);
router.get("/:id", messagesController.getPost);
router.put("/:id", messagesController.updateMessage);
router.delete("/:id", messagesController.deleteMessage);

module.exports = router;