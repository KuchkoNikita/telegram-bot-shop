import cn from 'classnames';
import styles from './styles.module.scss';

const Popup = ({
  children,
  isOpen,
  className,
}) => {
  return (
    <div 
      className={
        cn(styles.popup, className, {
          [styles.popupActive]: isOpen,
        })
      }
    >
    <div className={styles.popupContainer}>
      {children}
    </div>
  </div>
  );
};

export default Popup;