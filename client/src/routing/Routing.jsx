import React from "react";
import { Switch, Route}from 'react-router-dom';
import Home from '../Components/pages/home/Home'
import Intreview from '../Components/pages/interviews/Interviews'
import Register from '../Components/pages/register/Register';
import Tips from '../Components/pages/tips/Tips';
import Login from '../Components/pages/login/Login';

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route  path='/Register' component={Register}/>
                <Route  path='Home' component={Home}/>
                <Route  path='Intreview' component={Intreview}/>
                <Route  path='Tips' component={Tips}/>
            </Switch>
        </div>
    )
}

export default Routing;