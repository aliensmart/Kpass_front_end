import React from 'react'
import './Header.css';
import Search from '../Password/Search'




const Header = ()=>{
    return(
        <div className="Header">
            <div className="logo">Logo</div>
            <div className="profile">
              <Search/>
            </div>
            
        </div>
    )
}
export default Header