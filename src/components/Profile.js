import React from 'react'
import avatar from "../images/avatar.jpeg"
import share from "../images/pngegg.png"
function profile() {
    return (
        <div >
            <img src={share} alt="" className='share' />
            <img src={avatar} alt="" className='avatar' />
            <h1 className='name'>Mercy Kamene</h1>
        </div>
    )
}

export default profile