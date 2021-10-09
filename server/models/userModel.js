const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    profileImg: {
      type: String,
    },
    IdNumber: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    messages: [{ type: Schema.Types.ObjectId, ref: "forum" }],
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
