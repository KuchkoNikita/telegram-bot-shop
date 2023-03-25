import { useState } from "react";
import List from '@mui/material/List';
import Popup from '@/UI/containers/Popup';
import NavigationItem from '@/UI/components/NavigationItem';
import NavigationSubMenu from '@/UI/components/NavigationSubMenu';
import { HOOKAH, POD, E_LIQUID } from './utils/constant';
import styles from './styles.module.scss';

const NavigationPopupMenu = ({ isBurgerMenu, onCloseClick }) => {
  const [isOpenPods, setIsOpenPods] = useState(false);
  const [isOpenHookah, setIsOpenHookah] = useState(false);
  const [isOpenEliquid, setIsOpenEliquid] = useState(false);
  
  const handlPodsMenuClick = () => {
    setIsOpenPods((prevState) => !prevState);
  };

  const handlHookahMenuClick = () => {
    setIsOpenHookah((prevState) => !prevState);
  };

  const handleEliquidSecondLevel = () => {
    setIsOpenEliquid((prevState) => !prevState);
  };

  return (
    <Popup
      isShowCloseButton
      isOpen={isBurgerMenu}
      onCloseButtonClick={onCloseClick}
      className={styles.popup}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={styles.root}
      >
        <NavigationSubMenu
          title="Устроиства" 
          list={POD}
          isOpen={isOpenPods}
          onClick={handlPodsMenuClick}
        />
        <NavigationSubMenu
          title="Кальяны" 
          list={HOOKAH}
          isOpen={isOpenHookah}
          onClick={handlHookahMenuClick}
        />
        <NavigationSubMenu
          title="Жидкости" 
          list={E_LIQUID}
          isOpen={isOpenEliquid}
          onClick={handleEliquidSecondLevel}
        />
        <NavigationItem title="Напитки" link="/about-us" />
        <NavigationItem title="О нас" link="/" />
      </List>
    </Popup>
  )
};

export default NavigationPopupMenu;
