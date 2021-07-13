import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DropdownButton, Navbar } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signOut } from '../../reducers/utils'
import { logout } from '../../actions/userActions'
import BellIcon from '../../containers/Header/BellIcon';

function Nav() {
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    const userType = useSelector(state => state.userReducer.user.role)
    const history = useHistory()
    const dispatch = useDispatch()

    const user = useSelector(state => state.userReducer)
    const notifications = useSelector(state => state.doctorNotifications)
    // const pages = [{ name: "HOME", path: `/` }, { name: 'REGISTER', path: 'register' }, { name: 'log in', path: 'login' }]
    let home = '/';
    home = isLoggedIn ? `/dashboard/${userType}` : '/';
    const signOutHandler = () => {
        signOut();
        history.push('/')
        dispatch(logout())
    }
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to={home}>
                        {isLoggedIn ? 'Dashboard' : "HOME"}
                    </Link>
                </li>
                {isLoggedIn ? (<div style={{ display: "flex", position: "relative"}}><BellIcon notifications={notifications} />
                    <Navbar.Text style={{ display: "flex" }}>
                        <DropdownButton
                            style={{ width: "fit-content" }}
                            variant="secondary"
                            size="sm"
                            title={<><PersonCircle /> {user.user?.username.toUpperCase()}</>}
                        >
                            <Dropdown.Item eventKey="1">Edit Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={signOutHandler} eventKey="3">Sign out</Dropdown.Item>
                        </DropdownButton>
                    </Navbar.Text></div>) : (<><li><Link to={'/login'}>{"LOGIN"}</Link></li>
                        <li><Link to={'/aboutus'}>{"About Us"}</Link></li><li className="signup"><Link to={'/register'}>{"REGISTER"}</Link></li></>)}
            </ul>
        </nav>
    )
}

export default Nav
