import React, {useState} from 'react'
import './Form.css'
import Header from './Header'
import Router from './Router'



const Log = ()=>{  
    return(
        <div className="main_log">
        <div className="myForm">
            <Header/>
            <Router/>
        </div>
        </div>
    )
}


export default Log;