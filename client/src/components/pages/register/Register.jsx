// import "./register.scss";
import { Link } from "react-router-dom";
// import { hebrewVariables } from "../../../utils/hebrewVariables";
// import TextField from "@material-ui/core/TextField";
// import { Button } from "@material-ui/core";
// import { useState, useContext } from "react";
// import { Context } from "../../../context/Context";
// import axios from "axios";

// const Register = () => {
//   const [isSend, setIsSend] = useState(false);
//   const { dispatch, isFetching } = useContext(Context);
//   const [userInfo, setUserInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "",
//     IdNumber: "",
//   });

//   const sendUserSign = async (e) => {
//     e.preventDefault();
//     try {
//       debugger;
//       const res = axios.post("/api/register", {
//         ...userInfo,
//       });
//       setIsSend(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="container">
//       {/* <Form/> */}
//       <div className="left">
//         <h1>TAKE SHARE</h1>
//         {/* <img src="share.png" alt="logo"/> */}
//       </div>
//       <div className="right">
//       <form
//         // className="register-form-form"
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <TextField
//           name="firstName"
//           value={userInfo.firstName}
//           onChange={(e) => handleChange(e, userInfo, setUserInfo)}
//           type={"text"}
//           label={hebrewVariables.firstName}
//         />
//         <TextField

//           name="lastName"
//           value={userInfo.lastName}
//           onChange={(e) => handleChange(e, userInfo, setUserInfo)}
//           type={"text"}
//           label={hebrewVariables.lastName}
//           size="small"
//         />
//         <TextField
//           name="email"
//           value={userInfo.email}
//           onChange={(e) => handleChange(e, userInfo, setUserInfo)}
//           type={"email"}
//           label={hebrewVariables.email}
//         />
//         <TextField
//           name="phone"
//           value={userInfo.phone}
//           onChange={(e) => handleChange(e, userInfo, setUserInfo)}
//           type={"text"}
//           label={hebrewVariables.phone}
//         />
//         <TextField
//           name="IdNumber"
//           value={userInfo.IdNumber}
//           onChange={(e) => handleChange(e, userInfo, setUserInfo)}
//           type={"text"}
//           label={"ID"}
//         />
//         <TextField
//           name="role"
//           value={userInfo.role}
//           onChange={(e) => handleChange(e, userInfo, setUserInfo)}
//           type={"text"}
//           value={userInfo.role}
//           label={"role"}
//         />
//         <TextField
//           name="password"
//           value={userInfo.password}
//           onChange={(e) => handleChange(e, userInfo, setUserInfo)}
//           type={"text"}
//           value={userInfo.password}
//           label={hebrewVariables.password}
//         />
//          <Button variant="outlined" onClick={sendUserSign }color="primary">הרשמי</Button>
//         {/* <Button variant="outlined" color="secondary">התחברי
//             <Link to="/"></Link>
//             </Button> */}
//         {/* <button onClick={sendUserSign}>{"sign in"}</button>
//         <Link to="/">Log in</Link>  */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Redux/actions/userActions";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";
// import "./register.scss";

// let generator = require("generate-password");

// let password = generator.generate({
//   length: 8,
//   numbers: true,
// });

const Register = ({ SetIsRegister }) => {
  // const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.user);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    IdNumber: "",
  });

  // const [isSend, setIsSend] = useState(false);

  return (
    <>
      <div className="container">
        <div className="info">
          <h1>TAKE-SHARE</h1>
          <span>
            מקום מעולה לשתף בו ידע <i className="fa fa-heart"></i>
          </span>
        </div>
      </div>
      <div className="form">
        <div className="thumbnail">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"
            alt="study"
          />
        </div>
        <form className="login-form">
          <label>{hebrewVariables.firstName}</label>
          <input
            name="firstName"
            onChange={(e) => handleChange(e, newUser, setNewUser)}
            type={"text"}
            value={newUser.firstName}
          />
          {/* <p className="errors">{errors?.email}</p> */}

          <label>{hebrewVariables.lastName}</label>
          <input
            name="lastName"
            onChange={(e) => handleChange(e, newUser, setNewUser)}
            type={"text"}
            value={newUser.lastName}
          />

          <label>{hebrewVariables.email}</label>
          <input
            name="email"
            onChange={(e) => handleChange(e, newUser, setNewUser)}
            type={"email"}
            value={newUser.email}
          />

          <label>{hebrewVariables.phone}</label>
          <input
            name="phone"
            onChange={(e) => handleChange(e, newUser, setNewUser)}
            type={"text"}
            value={newUser.phone}
          />

          <label>{hebrewVariables.password}</label>
          <input
            name="password"
            onChange={(e) => handleChange(e, newUser, setNewUser)}
            type={"text"}
            value={newUser.password}
          />
          <label>{"תפקיד"}</label>
          <input
            name="role"
            value={newUser.role}
            onChange={(e) => handleChange(e, newUser, setNewUser)}
            type={"text"}
            label={"role"}
          />
          <p className="errors">{errors?.password}</p>

          <label>{"תעודת זהות"}</label>
          <input
            name="IdNumber"
            value={newUser.IdNumber}
            onChange={(e) => handleChange(e, newUser, setNewUser)}
            type={"text"}
            label={"IdNumber"}
          />
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(createUser(newUser));
              }}
            >
              הרשם
            </button>
          <p className="message">
            I already have an account? <Link to="/login">account</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Register;
