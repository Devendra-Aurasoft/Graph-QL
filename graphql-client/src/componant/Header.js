import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <div className='navbar '>
            <div className='container'>
            <div><h3>GraphQL ✔</h3></div>
            <ul className=''>
                <li> <Link className='link' to="/">Home</Link> </li>
                <li> <Link className='link' to="/quote">Create Quote</Link> </li>
                <li> <Link className='link' to="/profile">Profile</Link> </li>
                <li> <Link className='link' to="/signup">SignUp</Link> </li>
                <li> <Link className='link' to="/login">Login</Link> </li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default Header