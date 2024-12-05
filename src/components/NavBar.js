// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.navItem}>Home</Link></li>
        <li><Link to="/concepts" style={styles.navItem}>Concepts</Link></li>
        <li><Link to="/visualization" style={styles.navItem}>Visualization</Link></li>
        <li><Link to="/faq" style={styles.navItem}>FAQ</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '1rem',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  }
};

export default NavBar;
