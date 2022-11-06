import { Link } from "react-router-dom";
import "./Contact.css";
import svgEmail from "../../assets/email.svg";
import svgSocials from "../../assets/magnifying-glass.svg";

export default function Contact() {
	return (
		<>
			<Link className="link-back" to="/">
				Home
			</Link>
			<div id="contact">
				<h1 className="title">Contact</h1>
				<div className="line" />
				<div className="contact-links">
					<p>
						<img src={svgEmail} alt="" />
						<a href="mailto:lugodwaleed@gmail.com">lugodwaleed@gmail</a>
					</p>
					<p>
						<img src={svgSocials} alt="" />
						<a href="https://github.com/waleedlugod">github</a>
						{" / "}
						<a href="https://twitter.com/waleedlugod">twitter</a>
						{" / "}
						<a href="https://www.facebook.com/wwwlugod">facebook</a>
						{" / "}
						<a href="https://www.instagram.com/waleed.lugod/">instagram</a>
					</p>
				</div>
			</div>
		</>
	);
}
