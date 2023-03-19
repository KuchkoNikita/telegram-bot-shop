import cn from 'classnames'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.scss';

const Burger = ({
  onClick,
  className,
  isNavigationOpen,
}) => {
  
  return (
    <>
      {isNavigationOpen ? (
        <IconButton className={styles.burger} onClick={onClick}>
          <CloseIcon />
        </IconButton>
      ): (
        <IconButton className={styles.burger} onClick={onClick}>
          <MenuIcon />
        </IconButton>
      )}
    </>
  );
};

export default Burger;