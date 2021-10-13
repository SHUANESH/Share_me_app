import "./register.scss";

import handleChange from "../../../utils/handleChange";
import { Link } from "react-router-dom";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState, useContext } from "react";
import { Context } from "../../../context/Context";

import axios from "axios";

const Register = () => {
  const [isSend, setIsSend] = useState(false);
  const { dispatch, isFetching } = useContext(Context);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    IdNumber: "",
  });

  const sendUserSign = async (e) => {
    e.preventDefault();
    try {
      debugger;
      const res = axios.post("/api/register", {
        ...userInfo,
      });
      setIsSend(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      {/* <Form/> */}
      <div className="left">
        <h1>TAKE SHARE</h1>
        {/* <img src="share.png" alt="logo"/> */}
      </div>
      <div className="right">
        <form
          // className="register-form-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TextField
            dir="ltr"
            name="firstName"
            value={userInfo.firstName}
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"text"}
            label={hebrewVariables.firstName}
          />
          <TextField
            name="lastName"
            value={userInfo.lastName}
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"text"}
            label={hebrewVariables.lastName}
            size="small"
          />
          <TextField
            name="email"
            value={userInfo.email}
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"email"}
            label={hebrewVariables.email}
          />
          <TextField
            name="phone"
            value={userInfo.phone}
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"text"}
            label={hebrewVariables.phone}
          />
          <TextField
            name="IdNumber"
            value={userInfo.IdNumber}
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"text"}
            label={"ID"}
          />
          <TextField
            name="role"
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"text"}
            value={userInfo.role}
            label={"role"}
          />
          <TextField
            name="password"
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"text"}
            value={userInfo.password}
            label={hebrewVariables.password}
          />
          <Button variant="outlined" onClick={sendUserSign} color="primary">
            הרשם
          </Button>
          <Button variant="outlined" color="secondary">
            <Link to="/login">התחבר</Link>
          </Button>
          {/* <button onClick={sendUserSign}>{"sign in"}</button>
        <Link to="/">Log in</Link>  */}
        </form>
      </div>
    </div>
  );
};

export default Register;


// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createUser } from "../../Redux/actions/userActions";
// import handleChange from "../../../utils/handleChange";
// import { hebrewVariables } from "../../../utils/hebrewVariables";
// import "./register.scss";

// let generator = require("generate-password");

// let password = generator.generate({
//   length: 8,
//   numbers: true,
// // });
// const Register = ({ SetIsRegister }) => {
//   const { user ,errors} = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   // const { errors } = useSelector((state) => state.user);
//   const [newStudent, setNewStudent] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "",
//     IdNumber: "",
//   });
//   // const [newStudent, setNewStudent] = useState({
//   //   id: user._id,
//   //   courseId: course._id,
//   //   courseName: course.name,
//   //   password: password,
//   // });

//   const [isSend, setIsSend] = useState(false);

//   return (
//     <>
//       {!isSend ? (
//         <form
//           className="register-form-form"
//           onSubmit={(e) => {
//             e.preventDefault();
//           }}
//         >
//           <label>{hebrewVariables.firstName}</label>
//           <input
//             name="firstName"
//             onChange={(e) => handleChange(e, newStudent, setNewStudent)}
//             type={"text"}
//           />
//           <p> {errors?.firstName ? errors.firstName : ""} </p>

//           <label>{hebrewVariables.lastName}</label>
//           <input
//             name="lastName"
//             onChange={(e) => handleChange(e, newStudent, setNewStudent)}
//             type={"text"}
//           />
//           <p> {errors?.lastName ? errors.lastName : ""} </p>

//           <label>{hebrewVariables.email}</label>
//           <input
//             name="email"
//             onChange={(e) => handleChange(e, newStudent, setNewStudent)}
//             type={"email"}
//           />
//           <p> {errors?.email ? errors.email : ""} </p>
//           <label>{hebrewVariables.phone}</label>
//           <input
//             name="phone"
//             onChange={(e) => handleChange(e, newStudent, setNewStudent)}
//             type={"text"}
//           />
//           <p> {errors?.phone ? errors.phone : ""} </p>

//           <label>{hebrewVariables.selectGender}</label>
//           <input
//             type="radio"
//             onChange={(e) =>
//               handleChange(e, newStudent, setNewStudent)
//             }
//             name="gender"
//             value="זכר"
//           />
//            <input
//             type="radio"
//             onChange={(e) =>
//               handleChange(e, newStudent, setNewStudent)
//             }
//             name="gender"
//             value="נקבה"
//           />

//           <label>{hebrewVariables.age}</label>
//           <input
//             name="age"
//             onChange={(e) => handleChange(e, newStudent, setNewStudent)}
//             type={"number"}
//           />
//           <p> {errors?.age ? errors.age : ""} </p>

//           <label>{hebrewVariables.password}</label>
//           <input
//             name="password"
//             onChange={(e) => handleChange(e, newStudent, setNewStudent)}
//             type={"text"}
//             value={newStudent.password}
//           />
//           <button
//             onClick={() => dispatch(createUser(newStudent))}>
//             {hebrewVariables.add}
//           </button>
//         </form>
//       ) : (
//         <div>
//           <h3>
//             {newStudent.firstName} {newStudent.lastName}{hebrewVariables.registered}
//           </h3>
//           <p> {hebrewVariables.emailSent} {newStudent.email}</p>
//           <button onClick={() => {
//             SetIsRegister();
//             setIsSend(false)
//           }}>{hebrewVariables.closeBtn}</button>
//         </div>
//       )}
//     </>
//   );
// };
// export default Register;


