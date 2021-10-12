import './register.scss';
import {useState} from 'react';
import handleChange from "../../../utils/handleChange";
import { Link } from "react-router-dom";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
// import Form from '../form/Form'
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
        <TextField dir="ltr"
          name="firstName"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
          label={hebrewVariables.firstName}
        />
        <TextField
        
          name="lastName"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
          label={hebrewVariables.lastName}
          size="small"
        />
        <TextField
          name="email"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"email"}
          label={hebrewVariables.email}
        />
        <TextField
          name="phone"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"text"}
          label={hebrewVariables.phone}
        />
        <TextField
          name="age"
          onChange={(e) => handleChange(e, userInfo, setUserInfo)}
          type={"number"}
          label={hebrewVariables.age}
        />
        <TextField
          name="IdNumber"
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
         <Button variant="outlined" onClick={sendUserSign }color="primary">הרשמי
 </Button>
 <Button variant="outlined" color="secondary">התחברי
 <Link to="/"></Link>
 </Button>
        {/* <button onClick={sendUserSign}>{"sign in"}</button>
        <Link to="/">Log in</Link>  */}
      </form>
      </div>
      </div>
  );
}

export default Register
