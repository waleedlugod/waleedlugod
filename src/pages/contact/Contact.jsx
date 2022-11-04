import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
	const refName = useRef(null);
	const refEmail = useRef(null);
	const refMessage = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		refName.current.value =
			refEmail.current.value =
			refMessage.current.value =
				"";
	}

	return (
		<>
			<Link to="/">Home</Link>
			<h1>Contact</h1>
			<form className="contact" onSubmit={handleSubmit}>
				<input
					type="text"
					name="text"
					id="name"
					placeholder="Name"
					ref={refName}
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					ref={refEmail}
				/>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Message"
					ref={refMessage}
				/>
				<input type="submit" value="" />
			</form>
		</>
	);
}
