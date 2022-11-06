import { Link } from "react-router-dom";
import "./Contact.css";
import svgEmail from "../../assets/email.svg";
import svgSocials from "../../assets/magnifying-glass.svg";

export default function Contact() {
	return (
		<article id="contact">
			<Link className="link-back" to="/">
				Home
			</Link>
			<main>
				<h1>Contact</h1>
				<div className="line" />
				<div className="contact-links">
					<section>
						<img src={svgEmail} alt="" />
						<p>
							<a href="mailto:lugodwaleed@gmail.com">lugodwaleed@gmail</a>
						</p>
					</section>
					<section>
						<img src={svgSocials} alt="" />
						<p>
							<a href="https://github.com/waleedlugod">github</a>
							{" / "}
							<a href="https://www.linkedin.com/in/waleedlugod/">linkedin</a>
							{" / "}
							<a href="https://twitter.com/waleedlugod">twitter</a>
							{" / "}
							<a href="https://www.facebook.com/wwwlugod">facebook</a>
							{" / "}
							<a href="https://www.instagram.com/waleed.lugod/">instagram</a>
						</p>
					</section>
				</div>
			</main>
		</article>
	);
}
