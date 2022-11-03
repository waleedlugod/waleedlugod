import { useEffect, useState } from "react";
import "../index.css";

export default function Helo() {
	const [pos, setPos] = useState({});
	useEffect(() => {
		const handleMouseMove = (e) => {
			setPos({ x: e.screenX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<>
			<div
				className="halo"
				style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
			></div>
		</>
	);
}
