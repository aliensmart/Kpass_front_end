import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebare.css'


const Sidebare = ()=>{

    let timeReload = (timeTo)=>{
        // 
        setTimeout((function(){window.location="http://localhost:3000/"}),timeTo)}

    return(
        <div>
            <Link className="nav" type="nav" to='/passwords'>Accounts & Passwords</Link>
            <Link className="nav" type="nav" to='/banks'>Bank Accounts</Link>
            <Link className="nav" type="nav" to='/family'>Family</Link>
            <Link className="nav" type="nav" to='/emergency'>Emergency</Link>
            <Link className="nav" type="nav" to='/setting'>Setting</Link>
            <Link className="nav" type="nav" to='/helpCenter'>Help Center</Link>
            <Link className="nav" onClick={e=>{sessionStorage.setItem('token', '');  javascript:timeReload(500)}}>Logout</Link>
        </div>
    )
}
export default Sidebare