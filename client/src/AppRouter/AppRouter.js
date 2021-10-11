import React from "react";
import { Switch, Route}from 'react-router-dom';
import Home from '../Components/pages/home/Home'
import Intreview from '../Components/pages/interviews/Interviews'
import Login from '../Components/pages/sign-in/SignIn'
import Tips from '../Components/pages/tips/Tips'


export default function AppRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route  path='Home' component={Home}/>
                <Route  path='Intreview' component={Intreview}/>
                <Route  path='Tips' component={Tips}/>
            </Switch>
        </div>
    )
}

