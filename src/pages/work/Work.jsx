import { Link } from "react-router-dom";
import "./Work.css";

export default function Work() {
	return (
		<article id="work">
			<Link className="link-back" to="/">
				Home
			</Link>
			<main>
				<h1>Work</h1>
				<div className="line"></div>
				<p>empty 😢</p>
			</main>
		</article>
	);
}
