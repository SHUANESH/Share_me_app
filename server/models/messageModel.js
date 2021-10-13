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
    messageType:{
      type: String,
      enum:["interview" , "information" , "tips"]
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
    comments: { type: [String], default: [] },
    authorByUser: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true },

);

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
