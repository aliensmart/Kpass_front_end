import React from 'react';


const Result = (props)=>{

    return(
        <tr>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.passwords}</td>
            <td>{props.url}</td>
            
        </tr>

    )

}

export default Result