import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { bgs } from "../../assets/homePageBgs";

export default function Home() {
	const { defaultBg, aboutBg, workBg, contactBg } = bgs;
	const [bg, setBg] = useState(defaultBg);
	const ref = useRef(null);
	useEffect(() => {
		ref.current.style.background = `url("${bg}")`;
	}, [bg]);
	return (
		<div id="home" ref={ref}>
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
					onMouseLeave={() => {
						setBg(defaultBg);
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
					onMouseLeave={() => {
						setBg(defaultBg);
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
					onMouseLeave={() => {
						setBg(defaultBg);
					}}
				>
					contact
				</Link>
			</div>
		</div>
	);
}
