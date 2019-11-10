import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Result from './PasswordResult'
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './search.css'


const Search = ()=>{

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //--Global variable--------------------------------------------------------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const token = sessionStorage.getItem('token');
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [theErro, setTheError] = useState('')
    const [url, setUrl] = useState(`http://localhost:5000/api/${token}/${query}`)
    const [data, setData] = useState({});
    

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //--send request--------------------------------------------------------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const res = await axios(url)
            console.log(res.data.your_pass);
            if(res.data.your_pass){
                setData(res.data.your_pass);
                document.getElementById("modal1").classList.add(isVisible)//add is-visible to the modal
            }else{
                setTheError(res.data.error)
            }
            
        }catch (error){
            console.log(error)
        }
        setIsLoading(false)
    };
    useEffect(()=>{
        
        fetchData();
    }, [url])


    let contents = null //contents variable
    const isVisible = "is-visible"//is-visible variable

    
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //--Check if search input is not empty--------------------------------------------------------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const isQueryEmpty = (e)=>{
        if(query==""){
            contents = (
                <span className="error"> Please Input field must not be empty</span>
            )
        }else{
            setUrl(`http://localhost:5000/api/${token}/${query}`);
            e.preventDefault(); 
            
        }
    }


    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //--User View--------------------------------------------------------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    return(
        <div>
            <span>{theErro}</span>
            <form className="search_form" onSubmit={e=>{isQueryEmpty(e)}}>
                <input className="search_form_inp" type="text" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Site Name"/>
                <input className="search_form_btn" type='submit' value="Search"/>
            </form>
            
                <Result
                    username={data.username}
                    email={data.email}
                    passwords={data.password_hash}
                    site_name= {data.site_name}
                    url={data.url} />
        </div>
    )

}


export default Search;