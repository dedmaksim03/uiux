import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import React from 'react';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <nav className={styles.navList}>
        <ul className={styles.navItem}>
          <li className={styles.navItem}>
            <button onClick={() => navigate('/')}>Home</button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => navigate('/about')}>About</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
