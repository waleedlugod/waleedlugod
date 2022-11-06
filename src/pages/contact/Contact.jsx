import { Link } from "react-router-dom";
import "./Contact.css";
import svgGithub from "../../assets/github.svg";
import svgTwitter from "../../assets/twitter.svg";
import svgFacebook from "../../assets/facebook.svg";
import svgInstagram from "../../assets/instagram.svg";

export default function Contact() {
	return (
		<div id="contact">
			<Link to="/">Home</Link>
			<h1 className="title">Contact</h1>
			<div className="line" />
			<p>
				Mail me: <a href="mailto:lugodwaleed@gmail.com">•lugodwaleed@gmail•</a>
			</p>
			<p>
				Find me:{" "}
				<a className="link" href="https://github.com/waleedlugod">
					<img src={svgGithub} alt="" />
				</a>
				<a className="link" href="https://twitter.com/waleedlugod">
					<img src={svgTwitter} alt="" />
				</a>
				<a className="link" href="https://www.facebook.com/wwwlugod">
					<img src={svgFacebook} alt="" />
				</a>
				<a className="link" href="https://www.instagram.com/waleed.lugod/">
					<img src={svgInstagram} alt="" />
				</a>
			</p>
			<div className="links"></div>
		</div>
	);
}
