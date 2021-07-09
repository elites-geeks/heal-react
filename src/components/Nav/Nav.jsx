import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav() {
    console.log('render')
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    const userType = useSelector(state => state.userReducer.userType)
    // const pages = [{ name: "HOME", path: `/` }, { name: 'REGISTER', path: 'register' }, { name: 'log in', path: 'login' }]
    let home = '/';
    home=isLoggedIn?`/dashboard/${userType}`: '/';

    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to={home}>
                        {isLoggedIn?'Dashboard': "HOME"}
                    </Link>
                </li>
                {isLoggedIn? null : (<><li><Link to={'/register'}>{"REGISTER"}</Link></li><li><Link to={'/login'}>{"LOGIN"}</Link></li></>)}
            </ul>
        </nav>
    )
}

export default Nav
