import React from 'react'
import Nav from '../../components/Nav/Nav'
import Logo from '../../components/Logo/Logo'
import Hamburger from '../../components/hamburger/Hamburger'
import './Header.scss'
import { useSelector ,useDispatch} from 'react-redux'
import { DropdownButton, Navbar } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import { Dropdown } from 'react-bootstrap'
import {signOut} from '../../reducers/utils'
import { useHistory } from 'react-router-dom'
import {logout} from '../../actions/userActions'
function Header() {
    const history = useHistory()
    const dispatch = useDispatch()
    const signOutHandler = ()=>{
        signOut();
        history.push('/')
        dispatch(logout())
    }
    const user = useSelector(state => state.userReducer)
    console.log(user.user)
    return (
        <>
            <div className="nav-bar">
                <Logo />
                <Nav />
                {user.isLoggedIn ? (<Navbar.Text>
                    Signed in as:{" "}
                    <DropdownButton
                        style={{width:"fit-content"}}
                        variant="secondary"
                        size="sm"
                        title={<><PersonCircle  /> {user.user?.username.toUpperCase()}</>}
                    >
                        <Dropdown.Item eventKey="1">Edit Profile</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Sittings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={signOutHandler} eventKey="3">Sign out</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Text>) : (
                    <Hamburger />
                )}
            </div>

        </>
    )
}

export default Header
