import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import { ButtonHome } from '../Buttons_header/ButtonHome';
import { ButtonBudget } from '../Buttons_header/ButtonBudget';
import { ButtonList } from '../Buttons_header/ButtonList';
import { ButtonStats } from '../Buttons_header/ButtonStats';
import { MenuButton } from '../MenuButton';
import Store from '../../store';
import { useEffect } from 'react';

export const Header = ({ username }: { username: string }) => {
  // useEffect(() => {
  //   store.getData();
  // }, []);
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
                <button onClick={() => navigate('/stats')}>
                  <MenuButton url="/stats" Icon={ButtonStats} />
                </button>
              </li>
              <li className={styles.navItem}>
                <button onClick={() => navigate('/home')}>
                  <MenuButton url="/home" Icon={ButtonHome} />
                </button>
              </li>
              <li className={styles.navItem}>
                <button onClick={() => navigate('/list')}>
                  <MenuButton url="/list" Icon={ButtonList} />
                </button>
              </li>
              <li className={styles.navItem}>
                <button onClick={() => navigate('/budget')}>
                  <MenuButton url="/budget" Icon={ButtonBudget} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <h3 className={styles.h3}>{username}</h3>
      </div>
    </header>
  );
};
