import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { bgs } from "../../assets/homeBgs";

export default function Home() {
	const { defaultBg, aboutBg, workBg, contactBg } = bgs;
	const [bg, setBg] = useState(defaultBg);

	return (
		<div
			id="home"
			style={{ backgroundImage: `url("${bg}")` }}
			onMouseOut={() => {
				setBg(defaultBg);
			}}
		>
			<div className="title">
				<h2>waleed</h2>
				<h1>LUGOD</h1>
			</div>
			<div className="pages">
				<Link
					to="about"
					onMouseOver={() => {
						setBg(aboutBg);
					}}
				>
					about
				</Link>
				<Link
					to="work"
					onMouseOver={() => {
						setBg(workBg);
					}}
				>
					work
				</Link>
				<Link
					to="contact"
					onMouseOver={() => {
						setBg(contactBg);
					}}
				>
					contact
				</Link>
			</div>
		</div>
	);
}
