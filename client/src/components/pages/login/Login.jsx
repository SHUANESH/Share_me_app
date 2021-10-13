import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../../Redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./login.scss";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const Login = () => {
  const { errors } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isSend, setIsSend] = useState(false);
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
              isSend ? setIsSend(false) : setIsSend(true);
            }}
          >
            התחבר
          </button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
