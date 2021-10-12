const express = require("express");
const router = express.Router();
const messageRouter = require('../controller/forumController')
router.get('/getAllMessage', messageRouter.getAllMessage)
router.post('/createMessage', messageRouter.createMessagesByStudent)
router.delete('/deleteMessage', messageRouter.deleteMessage)
router.put('/upDateMessage', messageRouter.upDateMessage)
router.post('/getMessageById', messageRouter.getMessageById)
module.exports = router