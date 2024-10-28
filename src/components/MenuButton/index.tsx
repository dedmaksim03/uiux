import { useMatch } from 'react-router-dom';
import { SVGProps } from 'react';
import styles from './menubutton.module.css';

export const MenuButton = ({ url, Icon }: { url: string; Icon: React.FunctionComponent<SVGProps<SVGSVGElement>> }) => {
  const isActive = useMatch(url);
  return (
    <button>
      <Icon className={isActive ? styles.style_in_url : styles.style_out_url} />
    </button>
  );
};
