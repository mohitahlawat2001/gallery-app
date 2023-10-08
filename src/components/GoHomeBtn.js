import { useLocation, useNavigate } from "react-router-dom";
import homeIconWhite from "./home_white.png";
import "./GoHomeBtn.css";

const withLocation = (GoHomeBtn) => (props) => {
	const location = useLocation();
	return <GoHomeBtn {...props} location={location} />;
};

const GoHomeBtn = () => {
	const navigate = useNavigate();
	const navigateToHome = () => {
		navigate("/");
	};

	return (
		<button
			className={`go-home-btn  white-bkg  gradient-bkg`}
			onClick={() => navigateToHome()}>
			<img className="home-icon" src={homeIconWhite} alt="home-icon" />
		</button>
	);
};

export default withLocation(GoHomeBtn);
