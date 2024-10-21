import { ReactNode } from 'react';
import styles from './layout.module.css';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children }: Props) => {
  return <div className={styles.layout}>{children}</div>;
};
export default Layout;
