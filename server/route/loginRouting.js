const express = require("express");
const router = express.Router();
const login = require('../controller/authorization/loginController');
const register = require('../controller/authorization/register');




router.post('/login', login);
router.post('/register', register);

module.exports = router;
