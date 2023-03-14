import cn from 'classnames';
import { NAVIGATION_MENU_ITEM } from './utils/constant';
import styles from './styles.module.scss';

const NavigationMenu = ({ isBurgerMenu }) => (
  <div 
    className={
      cn(styles.navigationMenu, {
        [styles.navigationMenuActive]: isBurgerMenu,
      })
    }
  >
    <nav className={styles.navigationList}>
      {NAVIGATION_MENU_ITEM.map(({ title, link }) => (
        <div className={styles.navigationWrapperItem}>
          <a className={styles.navigationItem} href={link}>{title}</a>
        </div>
      ))}
    </nav>
  </div>
);

export default NavigationMenu;
