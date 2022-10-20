import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import { About, Home, Projects } from "./pages/index";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Navigation />}>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/about" element={<About />}></Route>
					<Route exact path="/projects" element={<Projects />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
