const { UserModel, userValid } = require("../../models/userModel");
const {errorForUserScheme} = require("../../utils/Errors")
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  errorForUserScheme(req, res)
  await UserModel.findOne({ email: req.body.email }, (err, result) => {
    if (err) throw err;
    if (result) {
      return res.status(401).json({
        success: false,
        message: "email already exists",
      });
    }
    
    //Password Encryption Before That it enters to the database
    bcrypt.genSalt(12, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        if (err) throw err;
        req.body.password = hash;
        const {
          firstName,
          lastName,
          age,
          email,
          phone,
          role,
          IdNumber,
        } = req.body;
        const newUser = new UserModel({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          password: `${req.body.password}`,
          age: age,
          role: role,
          profileImg: req.file ? req.file.path : "null",
          IdNumber: IdNumber,
        });
        try {
          // await UserModel.insertMany(newUser)
          await newUser.save();
          console.log(newUser);
          res.status(201).json({
            success: true,
            message: "create new user success",
            data: newUser,
          });
        } catch (err) {
          res.status(400).json({
            success: false,
            message: "create new user filed !",
            error: err.message,
          });
        }
      });
    });
  });
};

module.exports = register;
