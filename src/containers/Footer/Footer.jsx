import React from 'react'
import './Footer.scss'
import logo from '../../components/Logo/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
        <footer>
            <div className="icons">
                <FacebookIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/elites-geeks/heal-react">  <GitHubIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <LinkedInIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TwitterIcon />

            </div>
            <div className="copy">

                <img alt="logo" src={logo} />
                <p>
                    &copy;{new Date().getFullYear()} Heal Team
                </p>
            </div>
            <div className='uls'>
                <ul>
                    <li>
                        <button className="links" style={{ border:"none"}}>Terms and Conditions</button>
                    </li>
                    <li>
                        <button className="links" style={{ border:"none"}}>Privacy</button>
                    </li>

                </ul>
                <ul>
                    <li>
                        <button className="links" style={{ border:"none"}}>About us</button>
                    </li>
                    <li>
                        <button className="links" style={{ border:"none"}}>Contact us</button>
                    </li>

                </ul>

                <ul>

                    <li>
                        <button className="links" style={{ border:"none"}}> Pricing</button>
                    </li>
                    <li>
                        <button className="links" style={{ border:"none"}}>API</button>
                    </li>
                </ul><br />
            </div><br />

        </footer>
    )
}

export default Footer
