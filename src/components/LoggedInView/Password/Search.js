import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Result from './PasswordResult'

const Search = ()=>{
    const token = sessionStorage.getItem('token');
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    const [url, setUrl] = useState(`http://localhost:5000/api/${token}/${query}`)
    const [data, setData] = useState({});
    
   
  
    
    const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const res = await axios(url)
            console.log(res.data.your_pass);
            setData(res.data.your_pass);
        }catch (error){
            console.log(error)
        }
        setIsLoading(false)
    };
    useEffect(()=>{
        
        fetchData();
    }, [url])


    return(
        <div>
            <form onSubmit={e=>{setUrl(`http://localhost:5000/api/${token}/${query}`); e.preventDefault()}}>
                <input type="text" value={query} onChange={e=>setQuery(e.target.value)}/>
                <input type='submit' value="Search"/>
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