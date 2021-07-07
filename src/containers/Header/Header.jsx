import React from 'react'
import Nav from '../../components/Nav/Nav'
import Logo from '../../components/Logo/Logo'
import Hamburger from '../../components/hamburger/Hamburger'
import Head from '../../components/Head/Head'
import './Header.scss'

function Header() {
    return (
        <>
            <div className="nav-bar">
                <Logo />
                <Nav />
                <Hamburger />
            </div>
            <div className="head">
                <Head />
            </div>
        </>
    )
}

export default Header
