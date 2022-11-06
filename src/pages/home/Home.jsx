import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
	return (
		<article id="home">
			<header className="title">
				<h2>waleed</h2>
				<h1>LUGOD</h1>
			</header>
			<nav className="pages">
				<Link to="about">about</Link>
				<Link to="work">work</Link>
				<Link to="contact">contact</Link>
			</nav>
		</article>
	);
}
