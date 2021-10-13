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
    // e.preventDefault();
    // try {
    //   debugger;
    //   const res = await axios.post("/api/register" , {
    //     ...userInfo
    //   })
    //   setUserInfo({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     role: "",
    //     IdNumber: "",
    //   })
    // } catch (error) {
    //   console.log(error);
    // }

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

        {/* <label>{hebrewVariables.age}</label>
        <input
          name="age"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"number"}
        /> */}

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
        <Link to="/login" onClick={()=>setIsSend(false)}>Log in</Link> 
      </form>
    </>
  );
}

export default Register
