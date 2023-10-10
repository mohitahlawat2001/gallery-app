import React, { useState } from "react";
import { data } from "./content/data";
import Card from "./components/Card";
import "./App.css";
import Button from "./components/Button";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [selectedContent, setSelectedContent] = useState(null);

  const openCard = (content) => {
    setSelectedContent(content);
    setShowModal(true);
  };

  const closeCard = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Card
          content={selectedContent}
          onClose={closeCard}
          imageThumbnails={data}
        />
      )}

      <div style={styles.main}>
        <div className="container" style={styles.container}>
          {data.map((image_data, index) => {
            return (
              <div
                className="imageContainer"
                style={styles.imageContainer}
                onClick={() => {
                  openCard(image_data);
                }}
                key={index}
              >
                <div style={styles.imageWrapper}>
                  <img
                    style={styles.image}
                    src={image_data.url}
                    alt={image_data.name}
                  />
                </div>
                <div style={styles.imageDescription}>
                  <p style={styles.imageDescriptionText}>
                    {image_data.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <Button />
      </div>
    </>
  );
}

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
    gap: "20px",
    maxWidth: "100%",
    padding: "20px",
  },
  imageContainer: {
    width: "calc(25% - 20px)",
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  imageContainerHovered: {
    transform: "scale(1.05)",
  },
  imageWrapper: {
    width: "100%",
    paddingTop: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  imageDescription: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#000000",
    color: "#d1d1d1",
    borderRadius: "0 0 5px 5px",
  },
  imageDescriptionText: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: 0,
  },
};

export default App;