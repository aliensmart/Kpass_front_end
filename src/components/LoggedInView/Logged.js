import React from 'react';
import Router from './Router'
import Sidebar from './SideBare/Sidebare'
import Header from './Header/Header'



const Logged = () => {
    const token = sessionStorage.getItem('token')
    return (
        <div>
            <Header/>
            <p>Welcome, Your token: {token} </p>
            <Sidebar/>
            <Router/>
            

            
        </div>
    )
}

export default Logged