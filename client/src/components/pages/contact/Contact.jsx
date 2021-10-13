import React from 'react'
import "./Contact.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
    return (
        <div>
<div class="section">
  <div class="top-border left"></div>
  <div class="top-border right"></div>
  <h1>צור קשר</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, a ab dolorum beatae numquam commodi consectetur quis, laudantium, facere expedita veniam. Ducimus magni fugit corporis neque cupiditate, nam in eos!</p>

  <div>  
  <MailOutlineIcon/> Teach-career@gmail.com
  <br/>
  <PhoneIcon/> 08-9409999
  </div>
</div>
        </div>
    )
}

export default Contact;
