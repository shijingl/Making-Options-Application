import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='center'>
            <h2>Wrong Links!</h2>
            <p className='padding-top'>
                <NavLink to='/'>Click here</NavLink> home page
            </p>
        </div>
    )
}

export default PageNotFound