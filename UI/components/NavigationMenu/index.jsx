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
    <ul
      className={styles.navigationList}
    >
      {NAVIGATION_MENU_ITEM.map(({ title, link }) => (
        <li>
          <a className={styles.navigationListItem} href={link}>{title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavigationMenu;
