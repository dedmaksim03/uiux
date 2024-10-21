import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <img className={styles.label} src="../public/label_left_corner.svg" />
      <nav className={styles.navList}>
        <ul className={styles.navItem}>
          <li className={styles.navItem}>
            <button onClick={() => navigate('/home')}>
              <img className={styles.svg_element} src="../public/page_budget.svg" />
            </button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => navigate('/')}>
              <img className={styles.svg_element} src="../public/page_diagram.svg" />
            </button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => navigate('/home')}>
              <img className={styles.svg_element} src="../public/page_list_expenses.svg" />
            </button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => navigate('/')}>
              <img className={styles.svg_element} src="../public/page_list.svg" />
            </button>
          </li>
        </ul>
        <h3 className={styles.h3}>username</h3>
      </nav>
    </header>
  );
};
