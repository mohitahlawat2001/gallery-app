import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import fetchData from "./data/fetchData";
import { data } from "./data/data";
import "./images.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Images = () => {
	const [apiData, setApiData] = useState({});
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);

	const [limit, setLimit] = useState(10);

	const [showModal, setShowModal] = useState(false);
	const [selectedContent, setSelectedContent] = useState(null);

	const openCard = (content) => {
		setSelectedContent(content);
		setShowModal(true);
	};

	const closeCard = () => {
		setShowModal(false);
	};

	useEffect(() => {
		fetchData(setApiData, setImages);
	}, [page]);

	const fetchMoreData = () => {
		const nextPage = page + 1;
		setPage(nextPage);
		setLimit(limit + 10);
		fetchData(setApiData, setImages, nextPage);
	};

	console.log(images);
	console.log("apiData", apiData);
	return (
		<>
			{showModal && (
				<Card content={selectedContent} onClose={closeCard} />
			)}

			<div className="main">
				<div className="container">
					{data.map((image_data, index) => (
						<div
							className="imageContainer"
							onClick={() => {
								openCard(image_data);
							}}
							key={index}>
							<div className="imageWrapper">
								<img
									className="image"
									src={image_data.url}
									alt={image_data.name}
								/>
							</div>
							<div className="imageDescription">
								<p className="imageDescriptionText">
									{image_data.name}
								</p>
							</div>
						</div>
					))}

					<InfiniteScroll
						dataLength={limit}
						next={fetchMoreData}
						style={{
							width: "100%",
							minHeight: "300px",
							display: "flex",
							justifyContent: "center",
							flexWrap: "wrap",
						}}
						hasMore={page !== apiData?.meta?.totalPage} // Determine if there's more data to load
						loader={<p>Loading...</p>}>
						{images?.length > 0 &&
							images?.map(({ image, _id, title }) => (
								<div
									className="imageContainer"
									style={{
										margin: "12px",
									}}
									key={_id}
									// onClick={() => {
									// 	openCard({ image, title });
									// }}
								>
									<div className="imageWrapper">
										<img
											className="image"
											src={image}
											alt={title}
										/>
									</div>
									<div className="imageDescription">
										<p className="imageDescriptionText">
											{title}
										</p>
									</div>
								</div>
							))}
					</InfiniteScroll>
				</div>
			</div>
		</>
	);
};

export default Images;
