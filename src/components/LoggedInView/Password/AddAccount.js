import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Password = (props)=>{
    const token = sessionStorage.getItem('token')
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputSiteName, setInputSiteName] = useState('')
    const [inputSiteUrl, setInputSiteUrl] = useState('')
    const [loading, setLoading] = useState(true)

    const newAccount = ()=>{
        const sendData = async ()=>{
            setLoading(true)
                try{
                    const data = {
                        email: inputEmail,
                        password: inputPassword,
                        username: inputUsername,
                        url: inputSiteUrl,
                        site_name: inputSiteName
                    }
                    const res = await axios.post(`http://localhost:5000/api/${token}/passwords_post`, data)
                    // const newData = [...props.oldData]
                    // newData.push(data)
                    // props.update(newData)
                    
                } catch(error){
                    console.log(error)
                } 
            
        }
        sendData()
    };

    const timeReload = (timeTo)=>{
        setTimeout("location.reload(true);",timeTo)}


    return(
        <div>
            <form>
                <input type="text" onChange={e=>setInputUsername(e.target.value)} placeholder="Username"/>
                <input type="text" onChange={e=>setInputPassword(e.target.value)} placeholder="Password"/>
                <input type="text" onChange={e=>setInputEmail(e.target.value)} placeholder="email"/>
                <input type="text" onChange={e=>setInputSiteName(e.target.value)} placeholder="Site Name"/>
                <input type="text" onChange={e=>setInputSiteUrl(e.target.value)} placeholder="Site Url"/>
                <input type="submit" onClick={e=>{newAccount(); e.preventDefault(); javascript:timeReload(1000)}}/>
            </form>
        </div>
    )
}
export default Password