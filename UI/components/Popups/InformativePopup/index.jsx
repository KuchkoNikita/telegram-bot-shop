import Popup from '@/UI/containers/Popup';
import styles from './styles.module.scss';

const InformativePopup = ({
  title,
  text,
  isOpen,
  onCloseButtonClick,
}) => (
  <Popup 
    isShowCloseButton
    className={styles.popup}
    isOpen={isOpen}
    onCloseButtonClick={onCloseButtonClick}
  >
    <div className={styles.popupContainer}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.content}>
        {text}
      </div>
    </div>
  </Popup>
);

export default InformativePopup;