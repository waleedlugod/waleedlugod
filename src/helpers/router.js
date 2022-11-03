import React from "react";
import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from "react-router-dom";
import { About, Error, Home, Work, Contact } from "../pages";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" errorElement={<Error />}>
			<Route index={true} element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="work" element={<Work />} />
			<Route path="contact" element={<Contact />} />
		</Route>
	)
);
