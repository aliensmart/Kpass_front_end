import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Login = ()=>{
    const useStateWithSessionStorage = sessionStorageKey=>{
        const [value, setValue] = React.useState(
            sessionStorage.getItem(sessionStorageKey)||'');
            return [value, setValue]
    };
    const [value, setValue] = useStateWithSessionStorage('token');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthError, setIsAuthError] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [inputUser, setInputUser] = useState('');
    const [inputPass, setInputPass] = useState('');

    useEffect(()=>{
        sessionStorage.setItem('token', value);
    }, [value]);

    const getToken = () => {
        const sendData = async () => {
            setIsAuthenticating(true);
            setIsError(false);
            setIsAuthError(false);
            try{
                const endpoint = 'http://localhost:5000/api/get_api_key'
                const data = {
                    username: inputUser,
                    password: inputPass
                }
                const res = await axios.post(endpoint, data)
                if(res.data.api){
                    setValue(res.data.api)
                }else{
                    setIsAuthError(true)
                } 
            }catch (error) {
                console.log(error)
                setIsError(true)
            }
            setIsAuthenticating(false)
        }
        sendData()
    };


    let contents = null;
    if(value){
        
    }


    return(
        <div>
            <p>This is the loggin page</p>
        </div>
    )
}


export default Login