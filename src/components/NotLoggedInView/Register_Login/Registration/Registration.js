import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Register = ()=>{

    const useStateWithSessionStorage = sessionStorageKey => {
        const [value, setValue] = React.useState(
            sessionStorage.getItem(sessionStorageKey) || "" );
            return [value, setValue]
    };

    const [value, setValue] = useStateWithSessionStorage('token');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthError, setIsAuthError] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [inputusername, setInputUsername] = useState('')
    const [inputpassword, setInputPassword] = useState('')
    const [inputConfirmPassword, setInputConfirmPassword] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    
    useEffect(()=>{
        sessionStorage.setItem('token', value);
    }, [value])

    const getToken = ()=>{
        const sendData = async ()=>{
            setIsAuthenticating(true);
            setIsError(false);
            setIsAuthError(false);
            try{
                const endPoint = 'http://localhost:5000/api/create';
                const data = {
                    username: inputusername,
                    password: inputpassword,
                    password_confirmation: inputConfirmPassword,
                    email: inputEmail
                }
                const res = await axios.post(endPoint, data)
                console.log(res.data.api_key)
                if(res.data.api_key){
                    setValue(res.data.api_key)
                }else{
                    setIsAuthError(true)
                }
            }catch(error){
                console.log(error);
                setIsError(true)
            };
            setIsAuthenticating(false)
            
        }
        sendData()
    };

    let contents = null;
    if(!value){
        contents=(
            <div>
                <form>
                <input type="text" onChange={e=>setInputUsername(e.target.value)} placeholder="Username"/>
                <input type="email" onChange={e=>setInputEmail(e.target.value)} placeholder="email"/>
                <input type="password" onChange={e=>setInputPassword(e.target.value)} placeholder="password"/>
                <input type="password" onChange={e=>setInputConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                <input type="button" onClick={e=>{getToken(); e.preventDefault();}} value="Register"/>
                </form>
            </div>
        )
    }

    return(
        <div>
            {contents}
        </div>
    )
}


export default Register