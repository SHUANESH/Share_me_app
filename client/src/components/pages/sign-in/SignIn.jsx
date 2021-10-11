import React from "react";
import "./signIn.scss";
// import ComboBox from "../../features/ComboBox";
import Buttons from "../../features/Buttons";
import InputWith from "../../features/InputWith";
// import Pass from "./InputAdornments";
export default function SignIn() {
  return (
    <div className="contanair">
    <div className="contact" id="contact">
    <div className="left">
      <img src="contactus.jpg" alt="con" />
    </div>
    <div className="right">
      <h2>Log in.</h2>
      <form method="post" enctype>
      <InputWith/>
            {/* <label> 
                 <input type="text" id="fname" name="First_name"  placeholder="First name" /></label>
         
            <label>
            {/* ref={toFocus} */}
              {/* <input type="text" id="lname" name="Last_name" placeholder="Last name" /></label>
            <label>
              <input type="text" name="phone" placeholder="Phone number" /></label>
            <label>        <input type="text" name="email" placeholder="Email"/></label>
            <label>      <input type="text" name="massage" placeholder="Text erea"/></label> */} 
    {/* <Button type="submit" placeholder="SEND">
      Send
    </Button> */}
            {/* <button type="submit" value="Send" >Send</button> */}
    <Buttons/>
          </form>
    </div>
        </div>
        </div>
  );
}
