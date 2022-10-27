import React from 'react'
import logo from '../images/I4G-Logo-Color-Cropped.webp'

function Footer() {
    return (
        <div className='footer'>
            <h1>Zuri<span className='dot'></span>Internship</h1>
            <p>HNG Internship 9 Frontend Task</p>
            <img src={logo} alt="" className='logoimage' />



        </div>
    )
}

export default Footer