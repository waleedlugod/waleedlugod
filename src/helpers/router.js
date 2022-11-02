import React from "react";
import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from "react-router-dom";
import { About, Error, Home, Work } from "../pages";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" errorElement={<Error />}>
			<Route index={true} element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="projects" element={<Work />} />
		</Route>
	)
);
