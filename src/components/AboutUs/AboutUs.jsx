import './AboutUs.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
let areen = 'https://ca.slack-edge.com/TNGRRLUMA-U01KEJLRLQ3-82fab7f44a03-512';

let omar = 'https://ca.slack-edge.com/TNGRRLUMA-U01KLSNQEMS-863d067f00ae-512'
let mohmmad = 'https://ca.slack-edge.com/TNGRRLUMA-U01KLHE2D36-f3246873f265-512'

function DoctorProfile() {

	return (
		<>
			<div class="main-dev">
				<div class="image-area">
					<div class="logo2">
						<h1>Elites<small>Team</small></h1>
					</div>
					<div class="img-wrapper">
						<img src={areen} alt="Logo" />
						<h2>Areen jaradat <small>Computer Engineer</small></h2>

						<ul>
							<li><a href="https://github.com/"><GitHubIcon /></a></li>
							<li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
							<li><a href="https://mobile.twitter.com/login"><TwitterIcon /></a></li>
							<li><a href="https://web.facebook.com/login.php?_rdc=1&_rdr"><FacebookIcon /></a></li>
						</ul>
					</div>
					<div class="img-wrapper">
						<img src={omar} alt="Logo" />
						<h2>Omar ramadan <small>Software Developer</small></h2>
						<ul>
							<li><a href="https://github.com/"><GitHubIcon /></a></li>
							<li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
							<li><a href="https://mobile.twitter.com/login"><TwitterIcon /></a></li>
							<li><a href="https://web.facebook.com/login.php?_rdc=1&_rdr"><FacebookIcon /></a></li>
						</ul>
					</div>
					<div class="img-wrapper">
						<img src={mohmmad} alt="Logo" />

						<h2>mohammad al-khazali <small>Software Developer</small></h2>
						<ul>
							<li><a href="https://github.com/"><GitHubIcon /></a></li>
							<li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
							<li><a href="https://mobile.twitter.com/login"><TwitterIcon /></a></li>
							<li><a href="https://web.facebook.com/login.php?_rdc=1&_rdr"><FacebookIcon /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default DoctorProfile;