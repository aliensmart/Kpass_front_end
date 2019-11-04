import React from 'react';
import './modal.css'


const Result = (props)=>{
    const timeReload = (timeTo)=>{
        setTimeout("location.reload(true);",timeTo)}
    const isVisible = "is-visible"
        const remove = ()=>{

            document.getElementById("modal").classList.remove(isVisible)
            console.log("clicked")
            javascript:timeReload(1000)
        }

        document.addEventListener('click', e => {
            if (e.target== document.querySelector(".modal.is-visible")){
                // console.log("clicked")
                document.querySelector(".modal.is-visible").classList.remove(isVisible)
                javascript:timeReload(1000)
            }
        })

        document.addEventListener("keyup", e => {
            if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
              document.querySelector(".modal.is-visible").classList.remove(isVisible);
              javascript:timeReload(1000)
            }
          });
    return(
        <div className="modal" id="modal1" data-animation="mixInAnimations">
            <div className="modal-dialog">
                <header>
                    Your Result
                    <button className="close-modal" onClick={e=>remove()}>X</button>

                </header>
                <table className="modal-content">
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
            </div>
        </div>
        
        

    )

}

export default Result