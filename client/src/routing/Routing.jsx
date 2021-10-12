import {useContext} from "react";
import { Switch, Route}from 'react-router-dom';
import Home from '../components/pages/home/Home'
import Interview from '../components/pages/interviews/Interviews';
import Information from '../components/pages/information/Infomation'
import Register from '../components/pages/register/Register';
import Tips from '../components/pages/tips/Tips';
import Login from '../components/pages/login/Login';
import {Context, ContextProvider} from "../context/Context";
import Forum from '../components/pages/Forum/ForumComponent'
import PostDetails from '../components/pages/Forum/ForumComponents/PostDetails/PostDetails';

const Routing = () => {
    const {user} = useContext(Context);
    return (
    <ContextProvider>
            <Switch>
                <Route path="/forum/:id" component={PostDetails} />
                <Route path="/forum" component={Forum} />
                <Route  exact path='/login'> <Login/> </Route>
                <Route  path='/register'> <Register /> </Route>
                <Route  path='/'> <Home/> </Route>
                <Route  path='/interview' ><Interview/></Route>
                <Route  path='/information'><Information/> </Route>
                <Route  path='/tips'> <Tips/> </Route>
            </Switch>
    </ContextProvider>
    )
}

export default Routing;