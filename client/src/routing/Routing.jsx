// import {useContext} from "react";
import { Switch, Route}from 'react-router-dom';
import Home from '../components/pages/home/Home'
import Interview from '../components/pages/interviews/Interviews';
import Information from '../components/pages/information/Infomation'
import Register from '../components/pages/register/Register';
import Tips from '../components/pages/tips/Tips';
import Login from '../components/pages/login/Login';
import Forum from '../components/pages/Forum/ForumComponent'
import PostDetails from '../components/pages/Forum/ForumComponents/PostDetails/PostDetails';
import NavBar from "../components/features/navbar/Navbar";
import jwt_decode from "jwt-decode";


const Routing = () => {
    // const {user} = useContext(Context);
    let user;
    try {
        const token = localStorage.getItem("jwtToken");
        user = jwt_decode(token);
    } catch (error) {
        console.log(error.message);
    }
    return (
        <>
           {!user?"":<NavBar/>}
            
            <Switch>

                <Route  exact path='/login'> <Login/> </Route>
                <Route  path='/register'> <Register /> </Route>
                <Route path="/forum/:id"> <PostDetails/> </Route>
                <Route path="/forum" ><Forum/> </Route>
                <Route  path='/'> <Home/> </Route>
                <Route  path='/interview' ><Interview/></Route>
                <Route  path='/information'><Information/> </Route>
                <Route  path='/tips'> <Tips/> </Route>
                
            </Switch>
        </>    
    )
}

export default Routing;