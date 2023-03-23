import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenu from '@/UI/components/NavigationMenu'
import { useHeader } from './utils/useHeader';
import styles from './styles.module.scss';

const Header = () => {
  const { isBurgerMenu, handleBurgerClick } = useHeader();

  return (
    <header className={styles.container}>
      <IconButton
        className={styles.burger}
        onClick={handleBurgerClick}
      >
        <MenuIcon className={styles.icon} />
      </IconButton>
      <NavigationMenu
        isBurgerMenu={isBurgerMenu}
        onCloseClick={handleBurgerClick}
      />
    </header>
  )
};

export default Header;
