import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo" />
                <h3>HEAL</h3>
            </Link>
        </div>
    )
}

export default Logo
