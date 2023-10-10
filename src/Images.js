import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import fetchData from "./data/fetchData";
import { data } from "./data/data";
import "./images.css";

const Images = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

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
    fetchData(setImages, setIsLoading);
  }, []);

  return (
    <>
      {showModal && <Card content={selectedContent} onClose={closeCard} />}

      <div className="main">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="container">
              {data.map((image_data, index) => (
                <div
                  className="imageContainer"
                  onClick={() => {
                    openCard(image_data);
                  }}
                  key={index}
                >
                  <div className="imageWrapper">
                    <img
                      className="image"
                      src={image_data.url}
                      alt={image_data.name}
                    />
                  </div>
                  <div className="imageDescription">
                    <p className="imageDescriptionText">{image_data.name}</p>
                  </div>
                </div>
              ))}

              {images.length > 0 &&
                images.map(({ image, _id, title }) => (
                  <div
                    className="imageContainer"
                    key={_id}
                    onClick={() => {
                      openCard({ image, title });
                    }}
                  >
                    <div className="imageWrapper">
                      <img className="image" src={image} alt={title} />
                    </div>
                    <div className="imageDescription">
                      <p className="imageDescriptionText">{title}</p>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Images;
