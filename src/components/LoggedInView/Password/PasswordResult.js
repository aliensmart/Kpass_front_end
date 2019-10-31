import React from 'react';


const Result = (props)=>{

    return(
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>email</th>
                    <th>password</th>
                    <th>site Name</th>
                    <th>Url</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.username}</td>
                    <td>{props.email}</td>
                    <td>{props.passwords}</td>
                    <td>{props.site_name}</td>
                    <td>{props.url}</td>
                </tr>

            </tbody>
            
        
        </table>
        

    )

}

export default Result