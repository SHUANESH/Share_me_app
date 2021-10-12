const {UserModel} = require('../models/userModel')

const deleteUser = async (req, res) => {
    try {
        UserModel.findByIdAndDelete(req.body.post.id).then((student) => {
            res
          .status(200)
          .json({
            success: true,
            message: "delete by id student success!",
            data:student
          });
        }).catch(() => {
            res.json({msg:"cant found id"})
        })
    } catch (err) {
        res
        .status(500)
        .json({
          success: false,
          message: "delete by id student filed",
          error: err.message
        });
    }
}
const upDateStudent = async (req,res) => {
    const post = req.body.post;
    try {
        UserModel.findByIdAndUpdate(req.body.post.id, post, (err,result) => {
        if (err) throw result
        res.status(200).json({
          success: true,
          message: 'updated user success',
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
module.exports = {
    deleteUser,
    upDateStudent  
}