const messageModel = require('../models/messageModel')
const {UserModel} = require('../models/userModel')
const getAllMessage = async (req,res) => {
  try {
    
    messageModel.find({}).then((result) => {
      res.status(200).json({
        success: true,
        message: 'success',
        data: result,
      });
    })
   
  } catch (err) {
 res.status(500).json({
      success: false,
      message: 'problem in database',
      error: err.message,
    });
  }

  // try {
    // const LIMIT = 3;
    // const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page
    // const total = await messageModel.countDocuments({});

    // await messageModel.find({}, (err, result) => {
    //   if (err) throw err;
    //   res.status(200).json({
    //     success: true,
    //     message: 'success',
    //     data: result,
        // currentPage: Number(page),
        // numberOfPages: Math.ceil(total / LIMIT),
      // });
    // }) 
      // .sort({ _id: -1 })
      // .limit(LIMIT)
      // .skip(startIndex);
  // } catch (err) {
  //   res.status(500).json({
  //     success: false,
  //     message: 'problem in database',
  //     error: err.message,
  //   });
  // }
}
const createMessagesByStudent = async (req, res) => {
    try { 
      const user = await UserModel.findById({_id:"616554a66d26b599b0ca8f99"});
      if (!user) throw "user not fond"
      console.log(user);
    const newMessages = new messageModel({
    fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
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
const deleteMessage = async (req,res) => {
  try {
    await messageModel.findByIdAndDelete(req.body.id).then(() => {
      res.json({msg:"delete message"})
    })

  } catch (err) { 
    res 
    .status(400)
    .json({
      success: false,
      message: "delete message failed",
      error: err.message
    });
    console.log(error)
  }
}
const upDateMessage = async (req, res) => {
  const post = req.body.post;
  try {
    messageModel.findByIdAndUpdate(req.body.post.id, post, (err,result) => {
      if (err) throw result
      res.status(200).json({
        success: true,
        message: 'updated message success',
        data: result,
      });
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'problem with update',
      error: err.message,
    });
  }
}
const getMessageById = async (req, res) => {
  try {
    await messageModel.findById(req.body.post.id).then((result) => {
      res.status(200).json({
        success: true,
        message: 'get message success',
        data: result,
      });
    })
  } catch (err) { 
    res 
    .status(400)
    .json({
      success: false,
      message: "get message failed",
      error: err.message
    });
    console.log(error)
  }
  
}
module.exports = {
  createMessagesByStudent,
  deleteMessage,
  upDateMessage,
  getAllMessage,
  getMessageById
}