import React from 'react'

function LinkButton({ name, id, link }) {
    return (
        <div>
            <a href={link}><button id={id} className="btn">{name}</button></a>
        </div>
    )
}

export default LinkButton