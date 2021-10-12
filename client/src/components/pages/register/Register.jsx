import {useState, useContext} from 'react';
import { Context } from "../../../context/Context";
import handleChange from "../../../utils/handleChange";
import { Link } from "react-router-dom";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import axios from "axios"

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
      const res =  axios.post("/api/register" , {
        ...userInfo
      })
      setIsSend(true)
    } catch (error) {
      console.log(error);
    }

  };
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
          value={userInfo.firstName}
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        <label>{hebrewVariables.lastName}</label>
        <input
          name="lastName"
          value={userInfo.lastName}
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        <label>{hebrewVariables.email}</label>
        <input
          name="email"
          value={userInfo.email}
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"email"}
        />
        <label>{hebrewVariables.phone}</label>
        <input
          name="phone"
          value={userInfo.phone}
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        {/* <label>{hebrewVariables.age}</label>
        <input
          name="age"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"number"}
        /> */}

        <label>{"ID"}</label>
        <input
          name="IdNumber"
          value={userInfo.IdNumber}
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        <label>{"role"}</label>
        <input
          name="role"
          value={userInfo.role}
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />

        <label>{hebrewVariables.password}</label>
        <input
          name="password"
          value={userInfo.password}
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
        />
        <button onClick={sendUserSign}>{"sign up"}</button>
         <button><Link to="/login" onClick={()=>setIsSend(false)}>Log in</Link> </button> 
      </form>
    </>
  );
}

export default Register
