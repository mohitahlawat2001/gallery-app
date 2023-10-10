import { useState } from 'react';
import { data } from './content/data';
import Modal from './modal/Modal';
import Header from './components/Header'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal} setSelectedContent={setSelectedContent} content={selectedContent} data={data} />
      )}
      <div style={styles.main}>
        <Header title="Photo Gallery" subtitle="A Photo Gallery App " />
        <div style={styles.container}>
          {data.map((image_data, index) => {
            return (
              <div
                style={styles.card}
                onClick={() => {
                  setShowModal(true);
                  setSelectedContent(image_data);
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
    gap: '10px',
    maxWidth: '80vw',
  },
  card: {
    width: 'calc(25% - 10px)', // Equal-sized cards with 10px gap
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    maxHeight: '200px', // Adjust the max height for images
  },
  imageDescription: {
    backgroundColor: '#000000',
    opacity: '0.7',
    padding: '8px',
  },
  imageDescriptionText: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: 0,
  },
};

export default App;
