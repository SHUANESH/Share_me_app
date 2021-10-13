const MessageModel = require("../models/messageModel");
const { UserModel } = require("../models/userModel");
const { nullError, nullVariable, isEmptyId } = require("../utils/Errors");
 
const messagesUser = async (req, res) => {
  try {
    isEmptyId(req.body._id);
    const user = await UserModel.findById(req.body._id);
    console.log(user);
    console.log(req.body.post);
    nullVariable(user);
    const newMessages = new MessageModel({
      fullName: `${user.firstName} ${user.lastName}`,
      email: req.body.post.email,
      title: req.body.post.title,
      message: req.body.post.message,
      authorByUser: user._id,
      messageType: req.body.post.messageType,
    });
    await newMessages.save();
    user.messages.push(newMessages);
    await user.save();
    res.status(201).json({
      success: true,
      message: "create new message success",
      data: newMessages,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "create new message filed",
      error: err.message,
    });
  }
};
const getAllMessages = async (req, res) => {
  console.log(req.query);
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page
    const total = await MessageModel.countDocuments({});

    const message = await MessageModel.find({});
    nullVariable(message);
    if (message) {
      res
        .status(200)
        .json({
          success: true,
          message: "success",
          data: message,
          currentPage: Number(page),
          numberOfPages: Math.ceil(total / LIMIT),
        })
        .sort({ _id: -1 })
        .limit(LIMIT)
        .skip(startIndex);
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "problem in database",
      error: err.message,
    });
  }
};
const deleteMessage = async (req, res) => {
  try {
    isEmptyId(req.params.id);
    await MessageModel.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) throw err;
      res.status(200).json({
        success: true,
        message: "delete message success",
        result: result,
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "delete message failed",
      error: err.message,
    });
  }
};
const updateMessage = async (req, res) => {
  const post = req.body.post;
  try {
    isEmptyId(req.params.id);
    await MessageModel.findByIdAndUpdate(
      req.params.id,
      post,
      { new: true },
      (err, result) => {
        if (err) throw err;
        res.status(200).json({
          success: true,
          message: "updated message success",
          data: result,
        });
      }
    );
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "problem with update",
      error: err.message,
    });
  }
};
const getPost = async (req, res) => {
  try {
    isEmptyId(req.params.id);
   const message =  await MessageModel.findById(req.params.id);
   nullVariable(message);
   nullError(message,res);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "get message failed",
      error: err.message,
    });
  }
};
const commentPost = async (req, res) => {
  isEmptyId(req.params.id);
  const { value } = req.body;
  const post = await MessageModel.findById(req.params.id);
  post.comments.push(value);
  const updatedPost = await MessageModel.findByIdAndUpdate(
    req.params.id,
    post,
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

const searchMessagesAutocomplete = async (req, res) => {
  try {
      let result = await collection.aggregate([     
              {
                '$search': {
                  'index': 'default',
                  'text': {
                    'query': `${req.query.term}`,
                    'path': {
                      'wildcard': '*'
                    }
                  }
                }
              }
            
      ]).toArray();
      res.send(result);
  } catch (err) {
    res
    .status(500)
    .json({
      success: true,
      message: "failed aggregate",
      error: err.message
    })
  }
};

module.exports = {
  commentPost,
  getPost,
  messagesUser,
  getAllMessages,
  deleteMessage,
  updateMessage,
  searchMessagesAutocomplete,
};
