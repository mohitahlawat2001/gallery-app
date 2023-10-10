import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import Images from "./components/Images";
import Header from "./components/Header";
import GoHomeBtn from "./components/GoHomeBtn";
import Footer from "./components/Footer";

const Router = () => {
	const [isHome, setIsHome] = useState(true);
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === "/") {
			setIsHome(true);
		} else setIsHome(false);
	}, [pathname]);

	return (
		<>
			<Header title="Photo Gallery" subtitle="A Photo Gallery App " />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/images" element={<Images />} />
			</Routes>
			<Footer />
			{isHome ? null : <GoHomeBtn />}
		</>
	);
};

export default Router;
