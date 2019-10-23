import React from 'react';
import {Route} from 'react-router';
import Passwords from './Password/Passwords'
import Banks from './Banks_account/BanksAccount'
import Family from './Family/Family'
import Setting from './Setting/Settings'
import Emergency from './Emergency/Emergency'
import Help from './HelpCenter/Help'


const Router = ()=>{
    return(
        <div>
            <Route  path='/passwords' component={Passwords}/>
            <Route  path='/banks' component={Banks}/>
            <Route  path='/family' component={Family}/>
            <Route  path='/emergency' component={Emergency}/>
            <Route  path='/setting' component={Setting}/>
            <Route  path='/helpCenter' component={Help}/>
        </div>
    )
}
export default Router