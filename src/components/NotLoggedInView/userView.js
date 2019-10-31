

const UserView = () => {
    

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

export default UserView