


const ToggleViews = ()=>{
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
                console.log(res.data.api)
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
        contents = (
            <div>
                <Logged/>
                <br></br>
                <button onClick={e=>{setValue(null)}}>Log Out</button>
            </div>
        )
    }else{
        contents = (
            <div>
                <Login
            userChange = {e=>setInputUser(e.target.value)}
            passChange = {e=>setInputPass(e.target.value)}
            click = {e=>{getToken(); e.preventDefault()}}/>
                {isError && <h3>processing error.</h3>}
                {isAuthError && <h3>Please review your information.</h3>}
                
            </div>
        )
    }
    return(
        <div>
            
            {contents}
            
        </div>
    )
}


export default ToggleViews