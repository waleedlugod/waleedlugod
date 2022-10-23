import React from "react";
import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from "react-router-dom";
import { About, Home, Projects } from "../pages";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route exact path="/">
			<Route index={true} element={<Home />} />
			<Route exact path="about" element={<About />} />
			<Route exact path="projects" element={<Projects />} />
		</Route>
	)
);
