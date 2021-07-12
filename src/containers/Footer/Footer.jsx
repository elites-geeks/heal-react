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
            <div className='uls'>
            <ul>
                <li>
                    Terms and Conditions
                </li>
                <li>
                    Privacy
                </li>
               
            </ul>
            <ul>
                <li>
                About us
                </li>
                <li>
                Contact us <br />
             
                </li>
                
            </ul>
           
            <ul>
               
                <li>
                    Pricing
                </li>
                <li>
                    API
                </li>
            </ul><br />
            </div><br />
            <div class="icons">
        <FacebookIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="https://github.com/elites-geeks/heal-react">  <GitHubIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <LinkedInIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TwitterIcon/>
                
            </div>
            <div className="copy">

<img alt="logo" src={logo} />
<p>
    &copy;{new Date().getFullYear()} Heal Team
</p>
</div>
        </footer>
    )
}

export default Footer
