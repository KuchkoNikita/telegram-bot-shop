import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenu from '@/UI/components/NavigationMenu'
import styles from './styles.module.scss';

const Header = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const handleOnClick = () => {
    setIsBurgerMenu(!isBurgerMenu);
  }

  return (
    <header className={styles.container}>
      <IconButton
        className={styles.burger}
        onClick={handleOnClick}
      >
        <MenuIcon className={styles.icon} />
      </IconButton>
      <NavigationMenu
        isBurgerMenu={isBurgerMenu}
        onCloseClick={handleOnClick}
      />
    </header>
  )
};

export default Header;
