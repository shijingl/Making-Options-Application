import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
    return (
        <div>
            <h2>Wrong Links!</h2>
            <NavLink to='/'>Click here</NavLink> home page
        </div>
    )
}

export default PageNotFound