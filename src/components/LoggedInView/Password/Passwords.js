import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Password from './OneAccount'

const Passwords = ()=>{

    const token = sessionStorage.getItem('token')

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            setIsLoading(true);
            try{
                const res = await axios(`http://localhost:5000/api/${token}/passwords`)
                console.log(res.data.passwords);
                setData(res.data.passwords);
            }catch (error){
                console.log(error)
            }
            setIsLoading(false)
        };
        fetchData();
    }, [])
    
    const passwords = (
        <div>
            {data.map((password, index)=>{
                return(
                    <Password
                    id = {password.id}
                    user = {password.username}
                    email = {password.email}
                    password = {password.password_hash}
                    website = {password.site_name}
                    key={index}/>

                )
            })}
        </div>
    )
    
    const th={
        padding:"20px",
        width: '100px'
    }

    return(
        <div>
            <table>
                <thead>
                    <th style={th}>Id</th>
                    <th style={th}>Username</th>
                    <th style={th}>Email</th>
                    <th style={th}>Password</th>
                    <th style={th}>Site Name</th>
                </thead>
            </table>
            {passwords}
            
        </div>
    )
}
export default Passwords