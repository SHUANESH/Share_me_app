import React from 'react'
import Infomation from '../../pages/information/Infomation'
import Interviews from '../../pages/interviews/Interviews'
import Tips from '../../pages/tips/Tips'
import logout from '../logout/logout'
import contect from '../../pages/contect/contect'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from './navBarElmentes'
import { Button } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';



const Navbar = () => {
    return (
        <>
            <Nav>
            <NavLink to='/'>
            <HomeIcon style={{ fontSize: 60 , color:"#256ce1" }}/>
                </NavLink> 
                <Bars />
                <NavMenu>
                    <Button color="primary" variant="text" ><NavLink to="Infomation" activeStyle>Infomation</NavLink></Button>
                </NavMenu>
                <NavMenu>
                    <Button color="primary" variant="text" > <NavLink to="/Interviews" activeStyle>Interviews</NavLink></Button>
                </NavMenu>
                <NavMenu>
                    <Button color="primary" variant="text" >  <NavLink to="/Tips" activeStyle>Tips</NavLink></Button>
                </NavMenu>
                <NavMenu>
                    <Button color="primary" variant="text" >   <NavLink to="/contect" activeStyle>Contect us</NavLink></Button>
                </NavMenu>
               

                <NavBtn>
                    <NavBtnLink to="/Logout">Logout</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}



export default Navbar
