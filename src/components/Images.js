import React, { useEffect, useState } from "react";
import fetchData from "../content/fetchData";

const Images = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetchData(setImages, setIsLoading);
	}, []);
	console.log("before", isLoading);
	console.log("images from api", images);
	console.log("after", isLoading);
	return (
		<div style={styles.main}>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<div className="container" style={styles.container}>
						{images?.data?.map(({ image, _id, title, link }) => {
							return (
								<div
									className="imageContainer"
									style={styles.imageContainer}
									onClick={() => {
										// openCard(image_data);
									}}
									key={_id}>
									<img
										style={styles.image}
										src={image}
										alt={title}
									/>
									<div style={styles.imageDescription}>
										<p style={styles.imageDescriptionText}>
											{title}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

const styles = {
	main: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		backgroundColor: "#f0f0f0",
		margin: "auto",
		flexDirection: "column",
	},
	container: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		gap: "60px 80px",
		maxWidth: "100%",
		padding: "50px",
	},
	imageContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		cursor: "pointer",
		width: "300px",
		height: "300px",
	},
	image: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "top center",
	},
	imageDescription: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		width: "100%",
		height: "50px",
		backgroundColor: "#000000",
		color: "#d1d1d1",
	},
	imageContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		cursor: "pointer",
	},
	image: {
		width: "300px",
		height: "300px",
		objectFit: "cover",
	},
	button: {
		boxShadow: "0 0 40px 40px #3498db inset, 0 0 0 0 #3498db",
		transition: "all 150ms ease-in-out",
	},
};

export default Images;
