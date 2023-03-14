import { useState } from 'react';
import Burger from '@/UI/components/Burger'
import NavigationMenu from '@/UI/components/NavigationMenu'
import styles from './styles.module.scss';

const Header = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const handleOnClick = () => {
    setIsBurgerMenu(!isBurgerMenu);
  }

  return (
    <header className={styles.container}>
      <Burger onClick={handleOnClick} />
      <NavigationMenu isBurgerMenu={isBurgerMenu} />
    </header>
  )
};

export default Header;
