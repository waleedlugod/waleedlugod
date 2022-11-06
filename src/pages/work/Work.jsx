import { Link } from "react-router-dom";
import "./Work.css";

export default function Work() {
	return (
		<article id="work">
			<Link className="link-back" to="/">
				Home
			</Link>
			<h1>work</h1>
		</article>
	);
}
