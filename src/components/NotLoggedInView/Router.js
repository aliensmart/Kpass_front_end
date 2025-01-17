import React from 'react';
import {Route} from 'react-router';
import Home from './Home/Home';
import Log from './Register_Login/Login_Registration'
import News from './News/News';
import WeakPass from './WeakPass/WeakPass';
import {ThemeProvider} from 'emotion-theming'
import emotion from '@rebass/preset'

const Router = ()=>{
    return(
        <div>
            <ThemeProvider theme={emotion}>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Log}/>
                <Route path='/news' component={News}/>
                <Route path='/weakpass' component={WeakPass}/>
            </ThemeProvider>
        </div>
    )
}


export default Router