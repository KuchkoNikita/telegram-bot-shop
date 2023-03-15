import cn from 'classnames';
import styles from './styles.module.scss';

const Popup = ({
  children,
  isOpen,
  className,
  isShowCloseButton,
  onCloseButtonClick,
}) => {
  return (
    <div 
      className={
        cn(styles.popup, className, {
          [styles.popupActive]: isOpen,
        })
      }
    >
      {children}
      {isShowCloseButton && (
        <button 
          className={styles.closeButton}
          onClick={onCloseButtonClick}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default Popup;