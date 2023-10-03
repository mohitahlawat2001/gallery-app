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
      {showModal && <Card content={selectedContent} onClose={closeCard} />} 
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
    gap: 10,
    maxWidth: '60vw',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    cursor: 'pointer',
  },
  image: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
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
