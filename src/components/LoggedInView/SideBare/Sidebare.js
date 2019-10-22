import React from 'react';
import {Link} from 'react-router-dom'


const Sidebare = ()=>{
    return(
        <div>
            <Link type="nav" to='/'>Accounts & Passwords</Link>
            <Link type="nav" to='/banks'>Bank Accounts</Link>
            <Link type="nav" to='/family'>Family</Link>
            <Link type="nav" to='/emergency'>Emergency</Link>
            <Link type="nav" to='/setting'>Setting</Link>
            <Link type="nav" to='/helpCenter'>Help Center</Link>
        </div>
    )
}
export default Sidebare