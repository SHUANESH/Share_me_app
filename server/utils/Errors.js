const {userValid } = require("../models/userModel");

const errorForUserScheme = (req, res) =>{
    try {
        console.log(req.body);
        const errorOfReqBody = userValid(req.body);
        if (errorOfReqBody.error) {
          return res.status(401).json({
            success: false,
            message: errorOfReqBody.error.details[0].message,
          });
        }
      } catch (err) {
         console.log(err);
      }
}

module.exports = {
    errorForUserScheme,
}