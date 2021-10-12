const express = require("express");
const router = express.Router();
const userController = require('../controller/userController')
router.post('/deleteUser',userController.deleteUser)
router.post('/upDateUser',userController.upDateStudent)
module.exports = router