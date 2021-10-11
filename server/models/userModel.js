const mongoose = require("mongoose");
const Joi = require("joi");
const joigoose = require("joigoose")(mongoose);
const Schema = mongoose.Schema;
const userSchema = Joi.object({
  firstName: Joi.string()
  .required(),
  lastName: Joi.string()
  .required(),
  email: Joi.string()
  .required()
  .email() ,
  phone:Joi.string()
  .required()
  .max(10)
  .min(10),
  password:Joi.string()
  .required()
  .max(20)
  .min(8),
  profileImg: Joi.string(),
  IdNumber: Joi.string()
  .required()
  .max(20)
  .min(8),
  role: Joi.string()
  .required(),
  messages: [{ type: Schema.Types.ObjectId, ref: "message" }],
},
{ timestamps: true }
)

const userValid = (user)=>{
    const userJoi = userSchema.validate(user);
    return userJoi
};
const   userMongoose = new mongoose.Schema(joigoose.convert(userSchema))
const UserModel = mongoose.model("user", userMongoose);

module.exports ={
  UserModel,
  userValid,
} 
