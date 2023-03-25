import { Roboto } from '@next/font/google'
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import cn from 'classnames';
import styles from './styles.module.scss';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const Popup = ({
  children,
  isOpen,
  className,
  isShowCloseButton,
  onCloseButtonClick,
}) => {
  return (
    <Drawer
      open={isOpen}
      classes={{ paper: styles.paper }}
      className={
        cn(styles.popup, roboto.className, className, { [styles.popupActive]: isOpen })
      }
    >
      <div className={styles.popupContainer}>
        {children}
      </div>
      {isShowCloseButton && (
        <IconButton 
          size="small"
          className={styles.closeButton}
          onClick={onCloseButtonClick}
        >
          <CloseIcon className={styles.icon} />
        </IconButton>
      )}
    </Drawer>
  );
};

export default Popup;