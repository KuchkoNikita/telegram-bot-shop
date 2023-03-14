import Popup from '@/UI/containers/Popup';
import { NAVIGATION_MENU_ITEM } from './utils/constant';
import styles from './styles.module.scss';

const NavigationMenu = ({ isBurgerMenu }) => (
  <Popup isOpen={isBurgerMenu}>
    <nav>
      {NAVIGATION_MENU_ITEM.map(({ title, link }) => (
        <div className={styles.navigationWrapperItem}>
          <a className={styles.navigationItem} href={link}>{title}</a>
        </div>
      ))}
    </nav>
  </Popup>
);

export default NavigationMenu;
