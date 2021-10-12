const messageModel = require('../models/messageModel')
const {UserModel} = require('../models/userModel')

const messagesByStudent = async (req, res) => {
    try { 
      const user = await UserModel.findById({_id:"6164a7cfdf4599009315c347"});
      if (!user) throw "user not fond"
      console.log(user);
    const newMessages = new messageModel({
    fullName: req.body.post.fullName,
      email: req.body.post.email,
      title: req.body.post.title,
      message: req.body.post.message,
      authorByStudent: user._id,
    });
      await newMessages.save();
      user.messages.push(newMessages);
      await user.save();
      res
        .status(201)
        .json({
          success: true,
          message: "create new message success",
          data: newMessages
        });
    } catch (err) {
      res
        .status(400)
        .json({
          success: false,
          message: "create new message filed",
          error: err.message
        });
    }
};
module.exports = {
  messagesByStudent
}