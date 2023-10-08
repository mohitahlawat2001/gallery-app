import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
	return (
		<Link to={"/images"} className="btn">
			View More
		</Link>
	);
};

export default Button;
