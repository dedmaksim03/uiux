import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_container_left}>
          <img className={styles.label} src="../public/header/label_left_corner.svg" />
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.navList}>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <button onClick={() => navigate('/home')}>
                  <img className={styles.svg_element} src="../public/header/page_budget.svg" />
                </button>
              </li>
              <li className={styles.navItem}>
                <button onClick={() => navigate('/')}>
                  <img className={styles.svg_element} src="../public/header/page_diagram.svg" />
                </button>
              </li>
              <li className={styles.navItem}>
                <button onClick={() => navigate('/home')}>
                  <img className={styles.svg_element} src="../public/header/page_list_expenses.svg" />
                </button>
              </li>
              <li className={styles.navItem}>
                <button onClick={() => navigate('/')}>
                  <img className={styles.svg_element} src="../public/header/page_list.svg" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <h3 className={styles.h3}>username</h3>
      </div>
    </header>
  );
};
