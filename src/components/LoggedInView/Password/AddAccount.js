import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './modal.css'

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
        const isVisible = "is-visible"
        const remove = ()=>{

            document.getElementById("modal").classList.remove(isVisible)
            console.log("clicked")
            javascript:timeReload(1000)
        }

        document.addEventListener('click', e => {
            if (e.target== document.querySelector(".modal.is-visible")){
                // console.log("clicked")
                document.querySelector(".modal.is-visible").classList.remove(isVisible)
                javascript:timeReload(1000)
            }
        })

        document.addEventListener("keyup", e => {
            if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
              document.querySelector(".modal.is-visible").classList.remove(isVisible);
              javascript:timeReload(1000)
            }
          });

    return(
        <div className="modal" id="modal" data-animation="zoomInOut">
            <div className="modal-dialog" >
                <header>
                    Add New Password account
                    <button className="close-modal" onClick={e=>remove()}>X</button>

                </header>
                <form className="modal-content">
                    <input type="text" onChange={e=>setInputUsername(e.target.value)} placeholder="Username"/><br/>
                    <input type="text" onChange={e=>setInputPassword(e.target.value)} placeholder="Password"/><br/>
                    <input type="text" onChange={e=>setInputEmail(e.target.value)} placeholder="email"/><br/>
                    <input type="text" onChange={e=>setInputSiteName(e.target.value)} placeholder="Site Name"/><br/>
                    <input type="text" onChange={e=>setInputSiteUrl(e.target.value)} placeholder="Site Url"/><br/>
                    <input type="submit" onClick={e=>{newAccount(); e.preventDefault()}}/>
                </form>
            </div>
        </div>
    )
}
export default Password