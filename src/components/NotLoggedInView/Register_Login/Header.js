import React from 'react';
import{Link} from 'react-router-dom'

const link = {
    padding:"5px",
    textDecoration:"none",
    color:"black",
    fontSize:"14pt"
}

const Header = ()=>{
    return(
        <div>
            <span><Link style={link} type="nav" to='/login'>Login</Link></span>
            <span>/</span>
            <span><Link style={link} type="nav" to='/login/registrate'>Registrate</Link></span>
        </div>
    )
}

export default Header