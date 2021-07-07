import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const pages = [{ name: "HOME", path: '/' }, { name: 'REGISTER', path: 'signup' },{ name: 'log in', path: 'signin' }]
    return (
        <nav className="nav">
            <ul>
                {pages.map(page => (
                    <li>
                        <Link to={page.path}>
                            {page.name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
