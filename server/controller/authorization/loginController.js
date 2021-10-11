const {UserModel , userValid} = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
//   if (req.body.role === "Staff") {
//      try {
//         const errorOfReqBody = userValid(req.body);
//         if(errorOfReqBody.error) {
//             return errorOfReqBody.details[0].message
//         }


//      } catch (error) {
//          console.log(error);
//      } 



//     const { email, password } = req.body;
//     try {
//       const staff = await StaffModel.findOne({ email });
//       if (!staff) {
//         return res
//           .status(400)
//           .json({
//             success: false,
//             message: "email not found",
//             errors: { email: "email not fond" },
//           });
//       };

//       const isPasswordCorrect = await bcrypt.compare(password, staff.password);
//       if (!isPasswordCorrect) {
//         return res
//           .status(400)
//           .json({
//             success: false,
//             message: "wrong password",
//             errors: { password: "wrong password" } ,
//           });
//       };

//       delete staff.password
//       const token = jwt.sign(staff.toJSON(), SECRET_KEY, { expiresIn: "1d" });
//       res
//         .status(200)
//         .json({
//           success: true,
//           message: "success",
//           data: token
//         });

//     } catch (err) {
//       res
//         .status(500)
//         .json({
//           message: "something went wrong",
//           error: err.message
//         });
//     }
//   }

};

module.exports = login;
