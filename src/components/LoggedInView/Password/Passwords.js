import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './AddAccount'
import App from '../../../App'


const Passwords = ()=>{

    const token = sessionStorage.getItem('token')

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [showAdd, setShowAdd] = useState(false)

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
    
    
    const th={
        padding:"20px",
        width: '100px'
    }
    const toggle = ()=>{
        setShowAdd(!showAdd)
    }
    let content = null;
    if(!showAdd){
        content=(
            <div>
                <Add/>
            </div>
        )
    }
    

    return(
        <div>
            {content}
            <table>
                <thead>
                    <th style={th}>Id</th>
                    <th style={th}>Username</th>
                    <th style={th}>Email</th>
                    <th style={th}>Password</th>
                    <th style={th}>Site Name</th>
                    <th style={th}>Site url</th>
                </thead>
                <tbody>
                {data.map((password, index)=>{
                    return(
                    <tr>
                    <td>{password.id}</td>
                    <td>{password.username}</td>
                    <td>{password.email}</td>
                    <td>{password.password_hash}</td>
                    <td>{password.site_name}</td>
                    <td><a href={password.url} target="blank">{password.url}</a></td>
                    </tr>)
            })}
                </tbody>
            </table>

            <div onClick={e=>toggle()}>
                <span >+</span>
            </div>
            {/* {passwords} */}
            
        </div>
    )
}
export default Passwords