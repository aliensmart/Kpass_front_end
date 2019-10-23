import React from 'react'

const Password = (props)=>{

    const td = {
        padding : "20px",
        width:"200px"
    }


    return(
        <div>
            <tr>
                <td style={td}>{props.id}</td>
                <td style={td}>{props.user}</td>
                <td style={td}>{props.email}</td>
                <td style={td}>{props.password}</td>
                <td style={td}>{props.website}</td>
            </tr>
        </div>
    )
}
export default Password