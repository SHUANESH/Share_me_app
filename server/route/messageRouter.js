const express = require("express");
const router = express.Router();
const messageRouter = require('../controller/forumController')
router.post('/message', messageRouter.messagesByStudent)
module.exports = router