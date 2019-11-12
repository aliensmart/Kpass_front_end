import React from 'react';
import{Link} from 'react-router-dom'
import './Links.css'

const Header = ()=>{
    return(
        <div>
            <span><Link className="link" type="nav" to='/login'>Login</Link></span>
            <span style={{fontSize:"18pt"}}>/</span>
            <span><Link className="link" type="nav" to='/login/registrate'>Registrate</Link></span>
        </div>
    )
}

export default Header