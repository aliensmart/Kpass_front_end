import React from 'react';
import {Route} from 'react-router';
import Login from './Login/Login'
import Registration from './Registration/Registration'


const Router = ()=>{
    return (
        <div>
            <Route exact path='/log' component={Login}/>
            <Route  path='/log/registrate' component={Registration}/>
        </div>
    )
}

export default Router;