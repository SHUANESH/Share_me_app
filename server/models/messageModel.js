const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    title: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      required: true,
      default: Date.now,
      index: { expires: "365d" },
    },
    kindOfMessage: {
     type:String
    },
    comments: { type: [String], default: [] },
    authorByUser: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true },

);

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
