import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        <a href="https://github.com/mohitahlawat2001/gallery-app">
          <img src="\images\github.png" alt="Github" style={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/mohitahlawat/">
          <img src="\images\linkedin.png" alt="Linkedin" style={styles.icon} />
        </a>
        <a href="https://twitter.com/mahlawat2001">
          <img src="\images\twitter.png" alt="Twitter" style={styles.icon} />
        </a>
      </div>
      <p style={styles.text}>© 2023 Photo Gallary</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(to right, #007991, #78ffd6)',
    color: '#ffffff',
    textAlign: 'center',
    padding: '25px 0',
  },
  text: {
    fontSize: '1rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 2px #000000',
  },
  iconContainer: {
    marginTop: '10px',
  },
  icon: {
    width: '30px', 
    height: '30px',
    margin: '0 10px',
  },
}

export default Footer;
