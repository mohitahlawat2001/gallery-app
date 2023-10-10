import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Router = () => {

	return (
		<>
			<Header title="Photo Gallery" subtitle="A Photo Gallery App " />
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
			<Footer />
		</>
	);
};

export default Router;
