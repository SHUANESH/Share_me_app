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

import { useState } from "react";
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
        {/* <form className="register-form">
    <input type="text" placeholder="name"/>
    <input type="password" placeholder="password"/>
    <input type="text" placeholder="email address"/>
    <button>create</button>
    <p className="message">Already registered? <a href="#">Sign In</a></p>
  </form> */}
        <form className="login-form">
          <label htmlFor="email">{hebrewVariables.email}</label>
          <input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={(e) => handleChange(e, loginInfo, setLoginInfo)}
            required
          />
          <p className="errors">{errors?.email}</p>
          <label htmlFor="email">{hebrewVariables.password}</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e, loginInfo, setLoginInfo)}
            value={loginInfo.password}
            autoComplete="off"
            required
          />
          <p className="errors">{errors?.password}</p>
          <button
            className="bottom-login"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(getUser(loginInfo));
            }}
          >
            התחבר
          </button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
      {/* 
<video id="video" autoplay="autoplay" loop="loop" poster="polina.jpg">
  <source src="http://andytran.me/A%20peaceful%20nature%20timelapse%20video.mp4" type="video/mp4"/>
</video> */}
    </>
    //   <form id="stripe-login">
    //   <div classNameName="field padding-bottom--24">
    //     <label htmlFor="email">{hebrewVariables.email}</label>
    //     <input
    //       type="email"
    //       name="email"
    //       value={loginInfo.email}
    //       onChange={(e) =>
    //         handleChange(e, loginInfo, setLoginInfo)
    //       }
    //       required
    //     />
    //     <p className="errors">{errors?.email}</p>
    //   </div>
    //   <div className="field padding-bottom--24">
    //     <input
    //       type="password"
    //       name="password"
    //       onChange={(e) =>
    //         handleChange(e, loginInfo, setLoginInfo)
    //       }
    //       value={loginInfo.password}
    //       autoComplete="off"
    //       required
    //     />
    //     <p className="errors">{errors?.password}</p>
    //   </div>
    //   <div className="field padding-bottom--24">
    //     <input
    //       type="submit"
    //       name="submit"
    //       value="Continue"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         dispatch(getUser(loginInfo));
    //       }}
    //     />
    //   </div>
    // </form>
  );
};
export default Login;
