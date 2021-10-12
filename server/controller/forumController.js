const MessageModel = require('../models/messageModel')
const {UserModel} = require('../models/userModel')
const {nullError , nullVariable ,isEmptyId} = require("../utils/Errors")
// const getAllMessage = async (req,res) => {
//   try {
    
//     messageModel.find({}).then((result) => {
//       res.status(200).json({
//         success: true,
//         message: 'success',
//         data: result,
//       });
//     })
   
//   } catch (err) {
//  res.status(500).json({
//       success: false,
//       message: 'problem in database',
//       error: err.message,
//     });
//   }

//   // try {
//     // const LIMIT = 3;
//     // const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page
//     // const total = await messageModel.countDocuments({});

//     // await messageModel.find({}, (err, result) => {
//     //   if (err) throw err;
//     //   res.status(200).json({
//     //     success: true,
//     //     message: 'success',
//     //     data: result,
//         // currentPage: Number(page),
//         // numberOfPages: Math.ceil(total / LIMIT),
//       // });
//     // }) 
//       // .sort({ _id: -1 })
//       // .limit(LIMIT)
//       // .skip(startIndex);
//   // } catch (err) {
//   //   res.status(500).json({
//   //     success: false,
//   //     message: 'problem in database',
//   //     error: err.message,
//   //   });
//   // }
// }
// const createMessagesByStudent = async (req, res) => {
//     try { 
//       const user = await UserModel.findById({_id:"616554a66d26b599b0ca8f99"});
//       if (!user) throw "user not fond"
//       console.log(user);
//     const newMessages = new messageModel({
//     fullName: `${user.firstName} ${user.lastName}`,
//       email: user.email,
//       title: req.body.post.title,
//       message: req.body.post.message,
//       authorByStudent: user._id,
//     });
//       await newMessages.save();
//       user.messages.push(newMessages);
//       await user.save();
//       res
//         .status(201)
//         .json({
//           success: true,
//           message: "create new message success",
//           data: newMessages
//         });
//     } catch (err) {
//       res
//         .status(400)
//         .json({
//           success: false,
//           message: "create new message filed",
//           error: err.message
//         });
//     }
// };
// const deleteMessage = async (req,res) => {
//   try {
//     await messageModel.findByIdAndDelete(req.body.id).then(() => {
//       res.json({msg:"delete message"})
//     })

//   } catch (err) { 
//     res 
//     .status(400)
//     .json({
//       success: false,
//       message: "delete message failed",
//       error: err.message
//     });
//     console.log(error)
//   }
// }
// const upDateMessage = async (req, res) => {
//   const post = req.body.post;
//   try {
//     messageModel.findByIdAndUpdate(req.body.post.id, post, (err,result) => {
//       if (err) throw result
//       res.status(200).json({
//         success: true,
//         message: 'updated message success',
//         data: result,
//       });
//     })
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: 'problem with update',
//       error: err.message,
//     });
//   }
// }
// const getMessageById = async (req, res) => {
//   try {
//     await messageModel.findById(req.body.post.id).then((result) => {
//       res.status(200).json({
//         success: true,
//         message: 'get message success',
//         data: result,
//       });
//     })
//   } catch (err) { 
//     res 
//     .status(400)
//     .json({
//       success: false,
//       message: "get message failed",
//       error: err.message
//     });
//     console.log(error)
//   }
  
// }
// module.exports = {
//   createMessagesByStudent,
//   deleteMessage,
//   upDateMessage,
//   getAllMessage,
//   getMessageById
// }



const messagesUser = async (req, res) => {
  try { 
  isEmptyId(req.body._id)  
  const user = await MessageModel.findById(req.body._id);
  nullVariable(user);
  const newMessages = new MessageModel({
    firstName: req.body.post.firstName,
    email: req.body.post.email,
    title: req.body.post.title,
    message: req.body.post.message,
    authorByUser: user._id,
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
const getAllMessages = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page
    const total = await MessageModel.countDocuments({});

    await MessageModel.find({}, (err, result) => {
      if (err) throw err;
      res
        .status(200)
        .json({
          success: true,
          message: "success",
          data: result,
          currentPage: Number(page),
          numberOfPages: Math.ceil(total / LIMIT),
        });
    })
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "problem in database",
        error: err.message
      });
  }
};
const deleteMessage = async (req, res) => {
  try {
    isEmptyId(req.params.id);
    await MessageModel.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) throw err;
      res
        .status(200)
        .json({
          success: true,
          message: "delete message success",
          result: result
        });
    });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "delete message failed",
        error: err.message
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
        res
          .status(200)
          .json({
            success: true,
            message: "updated message success",
            data: result
          });
      }
    );
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "problem with update",
        error: err.message
      });
  }
};
const getPost = async (req, res) => {
  try {
    isEmptyId(req.params.id)
    await MessageModel.findById(req.params.id, (err, result) => {
      if (err) throw err;
      res
        .status(200)
        .json({
          success: true,
          message: "get message success",
          data: result
        });
    });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "get message failed",
        error: err.message
      });
  }
};
const commentPost = async (req, res) => {
  isEmptyId(req.params.id)
  const { value } = req.body;
  const post = await MessageModel.findById(req.params.id);
  post.comments.push(value);
  const updatedPost = await MessageModel.findByIdAndUpdate(req.params.id, post, {
    new: true,
  });
  res.json(updatedPost)
};

module.exports = {
  commentPost,
  getPost,
  messagesUser,
  getAllMessages,
  deleteMessage,
  updateMessage,
}