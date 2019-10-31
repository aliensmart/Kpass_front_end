import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './AddAccount'
import Result from './PasswordResult'
import './passwords.css'


const Passwords = ()=>{

    const token = sessionStorage.getItem('token')

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [showAdd, setShowAdd] = useState(false);
    const [loading, setLoading] = useState(true)
    
    const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const res = await axios(`http://localhost:5000/api/${token}/passwords`)
            // console.log(res.data.passwords);
            setData(res.data.passwords);
        }catch (error){
            console.log(error)
        }
        setIsLoading(false)
    };
    useEffect(()=>{
        
        fetchData();
    }, [])
    
    
    const th={
        padding:"20px",
        width: '100px'
    }
    const toggle = ()=>{
        setShowAdd(!showAdd)
    }
    
    const DelPk = (pk)=>{
        const sendData = async ()=>{
            setLoading(true)
            try{
                const data = {
                    pk: pk
                }
                const res = await axios.post(`http://localhost:5000/api/${token}/delete`, data)
            } catch(error){
                console.log(error)
            }
        }
        sendData()
    }
    // const delete2 = (pk)=>{
    //     // setPasswordPk(e.target.value)
    //     const url = `http://localhost:5000/api/${token}/delete`
    //     const promise = fetch(url, {
    //         method: 'POST',
    //         mode:'cors',
    //         headers:{'content-type': 'application/json'},
    //         body: JSON.stringify({
    //             pk: passwordPk
    //         })
    //     })
    //     promise.then(response => response.json()).then(json => {
    //         if (json.error !== undefined){
    //             console.log(json.error)
    //         }else{
    //             fetchData()
    //         }
    //     })
    // }

    const timeReload = (timeTo)=>{
        setTimeout("location.reload(true);",timeTo)}

    return(
        <div className="passwords">
            {/* <Result/> */}
            {showAdd && <Add update={setData} oldData={data}/>}
            {/* {content} */}
            <table>
                <thead>
                    <th style={th}>Id</th>
                    <th style={th}>Username</th>
                    <th style={th}>Email</th>
                    <th style={th}>Password</th>
                    <th style={th}>Site Name</th>
                    <th style={th}>Site url</th>
                    <th style={th}>Delete</th>
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
                    <td><button onClick={e=>{DelPk(password.pk);timeReload(500)}}>delete</button></td>
                    </tr>)
            })}
                </tbody>
            </table>

            <div  style={{marginTop:"30px"}}>
                <span className="addBtn" onClick={e=>toggle()}>+</span>
            </div>
            {/* {passwords} */}
            
        </div>
    )
}
export default Passwords