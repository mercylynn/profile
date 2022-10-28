import React from 'react'
import LinkButton from './LinkButton'

function Links() {
    return (
        <div className='linkssection'>
            <LinkButton name="Twitter Link" id="twitter" link="https://twitter.com/mercylynkay" />
            <LinkButton name="Zuri Team" id="btn__zuri" link="https://training.zuri.team/" />
            <LinkButton name="Zuri Books" id="books" link="http://books.zuri.team/" />
            <LinkButton name="Python Books" id="book__python" link="https://books.zuri.team/python-for-beginners?ref_id=Mercykay," />
            <LinkButton name="Background Check for Coders" id="pitch" link="https://background.zuri.team" title="python" />
            <LinkButton name="Design Books" id="book__design" link="https://books.zuri.team/design-rules " />
        </div>
    )
}

export default Links