import Popup from '@/UI/containers/Popup';
import styles from './styles.module.scss';

const TextPopup = ({
  title,
  text,
  isOpen,
  onCloseButtonClick,
}) => {
  return (
    <Popup 
      isShowCloseButton
      className={styles.popup}
      isOpen={isOpen}
      onCloseButtonClick={onCloseButtonClick}
    >
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.content}>
        {text}
      </div>
    </Popup>
  );
};

export default TextPopup;