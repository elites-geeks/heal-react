import React from 'react'
import './Footer.scss'
import logo from '../../components/Logo/logo.jpg'
function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    Terms and Conditions
                </li>
                <li>
                    Privacy
                </li>
                <li>
                    Contact us
                </li>
            </ul>
            <div className="copy">

            <img alt="logo" src={logo} />
            <p>
                &copy;{new Date().getFullYear()} Heal Team
            </p>
            </div>
            <ul>
                <li>
                    About us
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    API
                </li>
            </ul>
        </footer>
    )
}

export default Footer
