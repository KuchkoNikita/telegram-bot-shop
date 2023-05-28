import List from '@mui/material/List';
import Popup from '@/UI/containers/Popup';
import NavigationItem from '@/UI/components/NavigationItem';
import NavigationSubMenu from '@/UI/components/NavigationSubMenu';
import { useNavigationPopupMenu } from './utils/useNavigationPopupMenu';
import {
  HOOKAH,
  POD,
  E_LIQUID,
  BEVERAGES_LINK,
  ABOUT_US_LINK,
} from './utils/constant';
import styles from './styles.module.scss';

const NavigationPopupMenu = (props) => {
  const {
    isBurgerMenu,
    handleLinkClick,
    isOpenPods,
    isOpenHookah,
    isOpenEliquid,
    handlPodsMenuClick,
    handlHookahMenuClick,
    handleEliquidSecondLevel,
  } = useNavigationPopupMenu(props);

  return (
    <Popup
      isShowCloseButton
      isOpen={isBurgerMenu}
      onCloseButtonClick={handleLinkClick}
      className={styles.popup}
    >
      <div className={styles.popupContainer}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={styles.list}
        >
          <NavigationItem
            title="Главная страница"
            link="/"
            onClick={handleLinkClick}
          />
          <NavigationSubMenu
            title="Устроиства"
            list={POD}
            isOpen={isOpenPods}
            onClick={handlPodsMenuClick}
            onCloseClick={handleLinkClick}
          />
          <NavigationSubMenu
            title="Кальяны"
            list={HOOKAH}
            isOpen={isOpenHookah}
            onClick={handlHookahMenuClick}
            onCloseClick={handleLinkClick}
          />
          <NavigationSubMenu
            title="Жидкости"
            list={E_LIQUID}
            isOpen={isOpenEliquid}
            onClick={handleEliquidSecondLevel}
            onCloseClick={handleLinkClick}
          />
          <NavigationItem
            title="Напитки"
            link={BEVERAGES_LINK}
            onClick={handleLinkClick}
          />
          <NavigationItem
            title="О нас"
            link={ABOUT_US_LINK}
            onClick={handleLinkClick}
          />
        </List>
      </div>
    </Popup>
  );
};

export default NavigationPopupMenu;
