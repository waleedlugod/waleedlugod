import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
	return (
		<article id="about">
			<Link className="link-back" to="/">
				Home
			</Link>
			<main>
				<h1>About</h1>
				<div className="line"></div>
				<p>stuff stuff and other stuff</p>
			</main>
		</article>
	);
}
