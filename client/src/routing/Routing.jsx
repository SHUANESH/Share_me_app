import React from "react";
import { Switch, Route}from 'react-router-dom';
import Home from '../components/pages/home/Home'
import Interview from '../components/pages/interviews/Interviews';
import Information from '../components/pages/information/Infomation'
import Register from '../components/pages/register/Register';
import Tips from '../components/pages/tips/Tips';
import Login from '../components/pages/login/Login';

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route  path='/register' component={Register}/>
                <Route  path='/home' component={Home}/>
                <Route  path='/interview' component={Interview}/>
                <Route  path='/information' component={Information}/>
                <Route  path='/tips' component={Tips}/>
            </Switch>
        </div>
    )
}

export default Routing;