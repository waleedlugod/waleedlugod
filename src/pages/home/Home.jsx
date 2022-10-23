import { Link, Outlet } from "react-router-dom";

export default function Home() {
	return (
		<>
			<h1>Resume (wip😭)</h1>
			<a href="https://github.com/waleedlugod">GitHub</a>
			<ul>
				<li>
					<Link to="about">about</Link>
				</li>
				<li>
					<Link to="projects">projects</Link>
				</li>
			</ul>
		</>
	);
}
