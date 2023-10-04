import React, { useState } from 'react';
import { data } from './content/data';
import Header from './components/Header';
import Card from './components/Card';

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
      {showModal && <Card content={selectedContent} onClose={closeCard} imageThumbnails={data} />} 
      <div style={styles.main}>
        <Header title="Photo Gallery" subtitle="A Photo Gallery App" />
        <div style={styles.container}>
          {data.map((image_data, index) => {
            return (
              <div
                style={styles.imageContainer}
                onClick={() => {
                  openCard(image_data);
                }}
                key={index}
              >
                <img style={styles.image} src={image_data.url} alt={image_data.name} />
                <div style={styles.imageDescription}>
                  <p style={styles.imageDescriptionText}>{image_data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center horizontally
    gap: '60px 80px', // Adjust the gap between images both vertically and horizontally
    maxWidth: '100%', // Ensure the images don't exceed the container width
    padding: '50px', // Add some padding around the container
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    cursor: 'pointer',
    width: '300px', // Fixed width for each image container
    height: '300px', // Fixed height for each image container
  },
  image: {
    width: '100%',
    height: '100%', // Maintain aspect ratio
    objectFit: 'cover', // Crop or expand to fill the container
    objectPosition: 'top center', // Allow cropping from the top if necessary
  },
  imageDescription: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '50px',
    backgroundColor: '#000000',
  },
  imageDescriptionText: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default App;
