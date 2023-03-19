import Popup from '@/UI/containers/Popup';
import { NAVIGATION_MENU_ITEM } from './utils/constant';
import styles from './styles.module.scss';

const NavigationMenu = ({ isBurgerMenu }) => (
  <Popup isOpen={isBurgerMenu}>
    <div className={styles.navigationContainer}>
      <nav>
        {NAVIGATION_MENU_ITEM.map(({ title, link }) => (
          <div
            key={`${title}-${link}`}
            className={styles.navigationWrapperItem}
          >
            <a className={styles.navigationItem} href={link}>{title}</a>
          </div>
        ))}
      </nav>
    </div>
  </Popup>
);

export default NavigationMenu;
