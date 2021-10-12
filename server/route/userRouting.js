const express = require("express");
const router = express.Router();
const userController = require('../controller/userController')
router.delete('/deleteUser',userController.deleteUser)
router.put('/upDateUser',userController.upDateStudent)
module.exports = router