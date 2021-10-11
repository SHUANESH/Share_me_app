import React from "react";
import { Switch, Route}from 'react-router-dom';
import HomePage from "././../Commponnets/Pages/HomePage"
import Ideas from '././../Commponnets/Pages/Ideas'
import Intreview from './../Commponnets/Pages/Intreview'
import Loggin from './../Commponnets/Pages/Loggin'
import Tips from './../Commponnets/Pages/Tips'


export default function AppRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Loggin}/>
                <Route  path='Home' component={HomePage}/>
                <Route  path='Ideas' component={Ideas}/>
                <Route  path='Intreview' component={Intreview}/>
                <Route  path='Tips' component={Tips}/>
            </Switch>
        </div>
    )
}

