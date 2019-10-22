import React from 'react'


const Logged = () => {
    const token = sessionStorage.getItem('token')
    return (
        <div>
            <p>Welcome, Your token: {token} </p>
        </div>
    )
}

export default Logged