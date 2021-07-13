import React from 'react'
import Nav from '../../components/Nav/Nav'
import Logo from '../../components/Logo/Logo'
import './Header.scss'

function Header() {
    
    return (
        <>
            <div className="nav-bar">
                <Logo />
                <Nav />
            </div>

        </>
    )
}

export default Header
