import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import "./Register.css";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    age: 0,
    role: "",
    IdNumber: "",
  });

  const sendUserSign = async (e) => {
    e.preventDefault();
    try {
      debugger;
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(userInfo),
      })
        .then((response) => {
          if (!response.data) throw response;
          return response;
        })
        .then((response) => (isSend ? setIsSend(false) : setIsSend(true)))
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [isSend, setIsSend] = useState(false);
  return (
    <>
      <form
        className="register-form-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>{hebrewVariables.firstName}</label>
        <input
          name="firstName"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        <label>{hebrewVariables.lastName}</label>
        <input
          name="lastName"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        <label>{hebrewVariables.email}</label>
        <input
          name="email"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"email"}
        />
        <label>{hebrewVariables.phone}</label>
        <input
          name="phone"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        <label>{hebrewVariables.age}</label>
        <input
          name="age"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"number"}
        />

        <label>{"ID"}</label>
        <input
          name="IdNumber"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        <label>{"role"}</label>
        <input
          name="role"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
          value={userInfo.role}
        />

        <label>{hebrewVariables.password}</label>
        <input
          name="password"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
          value={userInfo.password}
        />
        <button onClick={sendUserSign}>{"sign in"}</button>
        {/* {!isSend ? <Link path="/login">Log in</Link> : ""} */}
      </form>
    </>
  );
};
export default Register;

// const Register = () => {
//     const [isSend, setIsSend] = useState(false);
//     const [userInfo, setUserInfo] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         password: "",
//         age: 0,
//         role: "",
//         IdNumber: "",
//     })

//     const sendUserSign = async (e)=>{
//         e.preventDefault();
//         try {
//             await fetch("/api/register", {
//                 method: 'POST',
//                 body: JSON.stringify(userInfo),
//             })
//                 .then((response) => {
//                     if (!response.data) throw response
//                     return response
//                 })
//                 .then((response) => setUserInfo(response))
//                 .catch((err) => { throw err });
//         }
//         catch (error) {
//            console.log(error.message);
//         }
//     }
//     return (
// //         <>
// //     <div class="login-wrap">
// // 	<div class="login-html">
// // 		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
// // 		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
// // 		<div class="login-form">
// // 			<div class="sign-in-htm">
// // 				<div class="group">
// // 					<label for="user" class="label">Username</label>
// // 					<input id="user" type="text" class="input" />
// // 				</div>
// // 				<div class="group">
// // 					<label for="pass" class="label">Password</label>
// // 					<input id="pass" type="password" class="input" data-type="password"/>
// // 				</div>
// // 				<div class="group">
// // 					<input id="check" type="checkbox" class="check" checked/>
// // 					<label for="check"><span class="icon"></span> Keep me Signed in</label>
// // 				</div>
// // 				<div class="group">
// // 					<input type="submit" class="button" value="Sign In"/>
// // 				</div>
// // 				<div class="hr"></div>
// // 				{/* <div class="foot-lnk">
// // 					<a href="#forgot">Forgot Password?</a>
// // 				</div> */}
// // 			</div>
// // 			<div class="sign-up-htm">
// // 				<div class="group">
// // 					<label for="user" class="label">Fires Name</label>
// // 					<input id="user" name="firstName" type="text" class="input" value={userInfo.firstName} onChange={(e) => handleChange(e, userInfo, setUserInfo)}/>
// // 				</div>
// //                 <div class="group">
// // 					<label for="user" class="label">Last Name</label>
// // 					<input id="user" name="lastName" type="text" class="input" value={userInfo.lastName} onChange={(e) => handleChange(e, userInfo, setUserInfo)}/>
// // 				</div>
// //                 <div class="group">
// // 					<label for="user" class="label">ID Number</label>
// // 					<input id="user"  name="IdNumber"  type="text" class="input" value={userInfo.IdNumber} onChange={(e) => handleChange(e, userInfo, setUserInfo)}/>
// // 				</div>

// //                 <div class="group">
// // 					<label for="user" class="label">Phone Number</label>
// // 					<input id="user" type="phone" name="phone" class="input" value={userInfo.phone} onChange={(e) => handleChange(e, userInfo, setUserInfo)}/>
// // 				</div>
// // 				<div class="group">
// // 					<label for="pass" class="label">Password</label>
// // 					<input id="pass" type="password" name="password" class="input" data-type="password" value={userInfo.password} onChange={(e) => handleChange(e, userInfo, setUserInfo)}/>
// // 				</div>
// // 				<div class="group">
// // 					<label for="pass" class="label">Email Address</label>
// // 					<input id="pass" type="email"  class="input" value={userInfo.email} onChange={(e) => handleChange(e, userInfo, setUserInfo)}/>
// // 				</div>
// // 				<div class="group">
// // 					<input type="submit" class="button" value="Sign Up" onClick={sendUserSign}/>
// // 				</div>
// // 				<div class="hr"></div>
// // 				<div class="foot-lnk">
// // 					<label for="tab-1">Already Member?</label>
// // 				</div>
// // 			</div>
// // 		</div>
// // 	</div>
// // </div>
// //         </>
//     )
// }

// export default Register
