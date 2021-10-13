import {useRef} from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from './navBarElmentes'
import { Button } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import jwt_decode from "jwt-decode";
import fetcher from "../../../utils/fetcher";
import { useDispatch} from "react-redux";
import {
  FETCH_ALL,
  UPDATE,
  CREATE,
  DELETE,
  START_LOADING,
  STOP_LOADING,
  FETCH_POST,
  COMMENT,
} from "../../Redux/actions/types";


const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/login";
  };

const Navbar = () => {
const dispatch = useDispatch();
 const termRef = useRef("")
    let user;
    try {
        const token = localStorage.getItem("jwtToken");
        user = jwt_decode(token);
    } catch (error) {
        console.log(error.message);
    }

    const handledSubmit = async (dispatch)=>{
        dispatch({ type: START_LOADING });
        await fetcher(`/api/forum/search?term=${termRef.current.value}`)
          .then((response) => {
            dispatch({
              type: FETCH_ALL,
              payload: response,
            });
          })
          .catch((err) => console.log(err));
        dispatch({ type: STOP_LOADING });
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
                    <Button color="primary" variant="text" > <NavLink to="/forum" activeStyle ref={termRef} onClick={handledSubmit}>Stack Overflow</NavLink></Button>
                    <Button color="primary" variant="text" > <NavLink to="/forum" activeStyle ref={termRef} onClick={handledSubmit}>ראיונות</NavLink></Button>
                    <Button color="primary" variant="text" >  <NavLink to="/forum" activeStyle ref={termRef} onClick={handledSubmit}>טיפים</NavLink></Button>
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
