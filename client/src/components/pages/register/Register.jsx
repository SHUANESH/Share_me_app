import {useState} from 'react';
import handleChange from "../../../utils/handleChange";
import { Link } from "react-router-dom";
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
        body: JSON.stringify({...userInfo}),
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
        <Link to="/">Log in</Link> 
      </form>
    </>
  );
}

export default Register
