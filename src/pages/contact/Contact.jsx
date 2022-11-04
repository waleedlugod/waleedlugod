import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
	return (
		<>
			<Link to="/">Home</Link>
			<h1>Contact</h1>
			<div className="links">
				<a href="mailto:lugodwaleed@gmail.com">lugodwaleed@gmail</a>
				<a href="https://github.com/waleedlugod">github</a>
				<a href="https://twitter.com/waleedlugod">twitter</a>
				<a href="https://www.facebook.com/wwwlugod">facebook</a>
				<a href="https://www.instagram.com/waleed.lugod/">instagram</a>
			</div>
		</>
	);
}
