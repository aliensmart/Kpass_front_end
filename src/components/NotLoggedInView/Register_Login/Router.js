import React from 'react';
import {Route} from 'react-router';
import Login from './Login/Login'
import Registration from './Registration/Registration'


const Router = ()=>{
    return (
        <div>
            <Route exact path='/login' component={Login}/>
            <Route  path='/login/registrate' component={Registration}/>
        </div>
    )
}

export default Router;