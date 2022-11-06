import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
	return (
		<>
			<Link className="link-back" to="/">
				Home
			</Link>
			<h1>About</h1>
		</>
	);
}
