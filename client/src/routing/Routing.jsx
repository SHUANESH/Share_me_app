import {useContext} from "react";
import { Switch, Route}from 'react-router-dom';
import Home from '../components/pages/home/Home'
import Interview from '../components/pages/interviews/Interviews';
import Information from '../components/pages/information/Infomation'
import Register from '../components/pages/register/Register';
import Tips from '../components/pages/tips/Tips';
import Login from '../components/pages/login/Login';
import {Context, ContextProvider} from "../context/Context";

const Routing = () => {
    const {user} = useContext(Context);
    return (
    <ContextProvider>
            <Switch>
                <Route  exact path='/login'>{user? <Home/> : <Login />}</Route>
                <Route  path='/register'> <Register /> </Route>
                <Route  path='/'>{user? <Home/> : <Login />}</Route>
                <Route  path='/interview' >{user? <Interview/> : <Login />}</Route>
                <Route  path='/information'>{user? <Information/> : <Login />}</Route>
                <Route  path='/tips'>{user? <Tips/> : <Login />}</Route>
            </Switch>
    </ContextProvider>
    )
}

export default Routing;