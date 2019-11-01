import React, {useState} from 'react'
import Login from './Login/Login'
import Register from './Registration/Registration'
import ShowPass from './show_hide_passw'



const Log = ()=>{
    const [log, setLog] = useState(true)
    const [Regis, setRegis] = useState(false)

    const showLogin = ()=>{
        setLog(true);
        setRegis(false)
    }
    const showRegister = ()=>{
        setLog(false)
        setRegis(true)
    }

    let login = null
    if(log==true){
        login = (
            <div>
                <Login/>
            </div>
        )
    }
    if(Regis==true){
        login = (
            <div>
                <Register/>
            </div>
        )
    }
    const h1={
        display:"inline",
        cursor: "pointer"
    }    
    return(
        <div>
            <h1 style={h1} onClick={e=>showLogin()}>Login/</h1>
            <h1 style={h1} onClick={e=>showRegister()}>Register</h1>
            {login}
            {/* <ShowPass/> */}
            
            
        </div>
    )
}


export default Log;