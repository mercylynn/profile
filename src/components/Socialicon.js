import React from 'react'
import github from "../images/github.png"
import slack from "../images/new-slack-logo.png"
function Socialicon() {
    return (
        <div className='icons'>
            <a href='https://github.com/mercylynn' target="balnk">
                <img src={slack} alt="" />
            </a>

            <a href='https://github.com/mercylynn'>
                <img src={github} alt='' className='github' />
            </a>


        </div>
    )
}

export default Socialicon