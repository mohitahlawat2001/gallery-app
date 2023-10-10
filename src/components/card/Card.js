import React from 'react';

const Card = ({ content, onClose, imageThumbnails }) => {
  const { name, url, description, date, type, size, width, height } = content;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      onClose();
    }
  };

  return (
    <div style={styles.background} onClick={handleBackgroundClick} className="modal-background">
      <div className='card' style={styles.card}>
        <div  className='cardHeader' style={styles.cardHeader}>
          <h1 className='cardTitle' style={styles.cardTitle}>{name}</h1>
          <button className='cardCloseButton' style={styles.cardCloseButton} onClick={onClose}>
            Close
          </button>
        </div>
        <div style={styles.cardContent}>
          <div style={styles.cardImageContainer}>
            <img style={styles.cardImage} src={url} alt={name} />
          </div>
          <div style={styles.cardDescription}>
            <p style={styles.cardDescriptionText}>{description}</p>
          </div>
          <div style={styles.cardDetails}>
            <div style={styles.cardDetailRow}>
              <p style={styles.cardDescriptionText}>Date</p>
              <p style={styles.cardDescriptionText}>{date}</p>
            </div>
            <div style={styles.cardDetailRow}>
              <p style={styles.cardDescriptionText}>Type</p>
              <p style={styles.cardDescriptionText}>{type}</p>
            </div>
            <div style={styles.cardDetailRow}>
              <p style={styles.cardDescriptionText}>Size</p>
              <p style={styles.cardDescriptionText}>{`${size} KB`}</p>
            </div>
            <div style={styles.cardDetailRow}>
              <p style={styles.cardDescriptionText}>Dimensions</p>
              <p style={styles.cardDescriptionText}>{`${width} x ${height}`}</p>
            </div>
          </div>
        </div>
        <div className='thumbnailRow' style={styles.thumbnailRow}>
          {imageThumbnails.map((thumbnail, index) => (
            <img
              style={styles.thumbnail}
              key={index}
              src={thumbnail.url}
              alt={thumbnail.name}
              onClick={() => {} /* Add your click handler here */}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center vertically
    overflow: 'auto',
    zIndex:1000,
  },
  card: {
    width: '40%',
    height: '75%',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '20px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize:'14px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000000',
  },
  cardCloseButton: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#000000',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  },
  cardContent: {
    flex: 1,
    overflowY: 'auto',
  },
  cardImageContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  cardImage: {
    width: '100%',
    objectFit: 'contain',
  },
  cardDescription: {
    marginBottom: '20px',
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardDetailRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  cardDescriptionText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'gray',
    fontStyle: 'italic',
  },
  thumbnailRow: {
    display: 'flex',
    justifyContent: 'center', // Center thumbnails horizontally
    alignItems: 'center',
    marginTop: '20px',
    
  },
  thumbnail: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    cursor: 'pointer',
    marginRight: '10px',
    borderRadius: '5px',
    
  },
};

export default Card;
