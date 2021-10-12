// import { Link } from "react-router-dom";
// import { Context } from "../../../context/Context";
// import {
//   LOGIN_START,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
// } from "../../../context/Cases";
// import { useContext, useRef } from "react";
// import axios from "axios";

// const Login = () => {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const { dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: LOGIN_START });
//     try {
//       const res = await axios.post("/api/login", {
//         email: emailRef.current.value,
//         password: passwordRef.current.value,
//       });
//       dispatch({ type: LOGIN_SUCCESS, payload: res.data.data });
//     } catch (error) {
//       dispatch({ type: LOGIN_FAILURE });
//       console.log(error);
//     }
//   };
//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm" onSubmit={handleSubmit}>
//         <label htmlFor="">email</label>
//         <input
//           className="loginInput"
//           type="text"
//           placeholder="Enter your email..."
//           ref={emailRef}
//         />
//         <label htmlFor="">Password</label>
//         <input
//           className="loginInput"
//           type="password"
//           placeholder="Enter your password"
//           ref={passwordRef}
//         />
//         <button className="loginButton" type="submit" disabled={isFetching}>
//           <Link className="link" to="/">
//             Login
//           </Link>
//         </button>
//       </form>

//       <button className="loginRegisterButton">
//         <Link className="link" to="/register">
//           Register
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { getUser } from "../../Redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import "./login.scss";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const Login = () => {
  const { errors } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  return (
    <form id="stripe-login">
    <div className="field padding-bottom--24">
      <label htmlFor="email">{hebrewVariables.email}</label>
      <input
        type="email"
        name="email"
        value={loginInfo.email}
        onChange={(e) =>
          handleChange(e, loginInfo, setLoginInfo)
        }
        required
      />
      <p className="errors">{errors?.email}</p>
    </div>
    <div className="field padding-bottom--24">
    <label htmlFor="password">{hebrewVariables.password}</label>
      <input
        type="password"
        name="password"
        onChange={(e) =>
          handleChange(e, loginInfo, setLoginInfo)
        }
        value={loginInfo.password}
        autoComplete="off"
        required
      />
      <p className="errors">{errors?.password}</p>
    </div>
    {/* <div>
      <p>{hebrewVariables.loginAs}</p>
      <label>
        <input
          type="radio"
          onChange={(e) =>
            handleChange(e, loginInfo, setLoginInfo)
          }
          name="role"
          value="Student"
        />
        {hebrewVariables.student}
      </label>
      <label>
        <input
          type="radio"
          onChange={(e) =>
            handleChange(e, loginInfo, setLoginInfo)
          }
          name="role"
          value="Staff"
        />
        {hebrewVariables.staff}
      </label>
    </div> */}
    <div className="field padding-bottom--24">
      <input
        type="submit"
        name="submit"
        value="Continue"
        onClick={(e) => {
          e.preventDefault();
          dispatch(getUser(loginInfo));
        }}
      />
    </div>
  </form>
  );
};
export default Login;
