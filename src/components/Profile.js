import React from 'react'
import avatar from "../images/avatar.jpeg"
function profile() {
    return (
        <div >
            <img src={avatar} alt="" className='avatar' />
            <h1 className='name'>Mercy Kamene</h1>
        </div>
    )
}

export default profile