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
            value={userInfo.role}
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"text"}
            value={userInfo.role}
            label={"role"}
          />
          <TextField
            name="password"
            value={userInfo.password}
            onChange={(e) => handleChange(e, userInfo, setUserInfo)}
            type={"text"}
            value={userInfo.password}
            label={hebrewVariables.password}
          />
          <Button variant="outlined" onClick={sendUserSign} color="primary">
            הרשמי
          </Button>
          <Button variant="outlined" color="secondary">
            התחברי
            <Link to="/"></Link>
          </Button>
          {/* <button onClick={sendUserSign}>{"sign in"}</button>
        <Link to="/">Log in</Link>  */}
        </form>
      </div>
    </div>
  );
};

export default Register;
