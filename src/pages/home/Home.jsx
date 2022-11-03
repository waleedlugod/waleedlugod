import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { bgs } from "../../assets/homePageBgs";

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
					className="about"
					to="about"
					onMouseOver={() => {
						setBg(aboutBg);
					}}
				>
					about
				</Link>
				<Link
					className="work"
					to="work"
					onMouseOver={() => {
						setBg(workBg);
					}}
				>
					work
				</Link>
				<Link
					className="contact"
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
