import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
	return (
		<>
			<div className="title">
				<h2>waleed</h2>
				<h1>LUGOD</h1>
			</div>
			<div className="pages">
				<Link to="about">about</Link>
				<Link to="work">work</Link>
				<Link to="contact">contact</Link>
			</div>
		</>
	);
}
