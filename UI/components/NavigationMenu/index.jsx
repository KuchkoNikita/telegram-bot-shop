import Popup from '@/UI/containers/Popup';
import styles from './styles.module.scss';

const NavigationMenuItem = ({ link, title }) => (
  <div className={styles.navigationWrapperItem}>
    <a className={styles.navigationItem} href={link}>{title}</a>
  </div>
)

const NavigationMenu = ({ isBurgerMenu, onCloseClick }) => (
  <Popup
    isShowCloseButton
    isOpen={isBurgerMenu}
    onCloseButtonClick={onCloseClick}
  >
    <div className={styles.navigationContainer}>
      <nav>
        <h2>Подсистемы</h2>
        <NavigationMenuItem link='/' title='Под-системы' />
        <NavigationMenuItem link='/' title='Расходники' />
        <h2>Кальяны</h2>
        <NavigationMenuItem link='/hookah' title='Шахты' />
        <NavigationMenuItem link='/hookah' title='Колбы' />
        <NavigationMenuItem link='/hookah' title='Шланги' />
        <NavigationMenuItem link='/hookah' title='Калауды' />
        <NavigationMenuItem link='/hookah' title='Чаши' />
        <h2>Жидкости</h2>
        <NavigationMenuItem link='/e-liquid' title='Жидкости' />
        <NavigationMenuItem link='/e-liquid' title='Основы' />
        <h2>Напитки</h2>
        <h2>О нас</h2>
      </nav>
    </div>
  </Popup>
);

export default NavigationMenu;
