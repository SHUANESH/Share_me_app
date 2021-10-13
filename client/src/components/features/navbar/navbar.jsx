import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from './navBarElmentes'
import { Button } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import jwt_decode from "jwt-decode";

const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/login";
  };

const Navbar = () => {
    let user;
    try {
        const token = localStorage.getItem("jwtToken");
        user = jwt_decode(token);
    } catch (error) {
        console.log(error.message);
    }
    return (
        <>
            <Nav>
            <NavLink to='/'>
            <HomeIcon />
                    <h4 style={{marginLeft:"20px"}}>
                      hello world {user?.firstName}
                   </h4>
                </NavLink> 
                <Bars />
                <NavMenu>
                    <Button color="primary" variant="text" > <NavLink to="/forum" activeStyle>Stack Overflow</NavLink></Button>
                    <Button color="primary" variant="text" > <NavLink to="/forum" activeStyle>ראיונות</NavLink></Button>
                    <Button color="primary" variant="text" >  <NavLink to="/forum" activeStyle>טיפים</NavLink></Button>
                    <Button color="primary" variant="text" >   <NavLink to="/contect" activeStyle>צור קשר</NavLink></Button>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Logout" onClick={logout}>התנתק</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}



export default Navbar;
