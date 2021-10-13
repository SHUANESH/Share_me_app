import React from 'react'
import Infomation from '../../pages/information/Infomation'
import Interviews from '../../pages/interviews/Interviews'
import Tips from '../../pages/tips/Tips'
import Logout from '../logout/Logout'
import contect from '../../pages/contact/Contact'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from './navBarElmentes'
import { Button } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import { Context } from "../../../context/Context";



const Navbar = () => {
    return (
        <>
            <Nav>
            <NavLink to='/'>
            <HomeIcon />
                </NavLink> 
                <Bars />
                <NavMenu>
                    <Button color="primary" variant="text" ><NavLink to="Infomation" activeStyle>Stack Overflow</NavLink></Button>
                    <Button color="primary" variant="text" > <NavLink to="/Interviews" activeStyle>ראיונות</NavLink></Button>
                    <Button color="primary" variant="text" >  <NavLink to="/Tips" activeStyle>טיפים</NavLink></Button>
                    <Button color="primary" variant="text" >   <NavLink to="/contect" activeStyle>צור קשר</NavLink></Button>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Logout">התנתק</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}



export default Navbar;
