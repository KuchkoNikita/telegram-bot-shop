import Popup from '@/UI/containers/Popup';
import { TEXT_DATA } from './utils/data';
import styles from './styles.module.scss';

const TextPopup = ({
  isOpen,
  onCloseButtonClick,
}) => {
  return (
    <Popup 
      isShowCloseButton
      className={styles.popup}
      isOpen={true}
      onCloseButtonClick={onCloseButtonClick}
    >
      <div className={styles.popupContainer}>
        <h2 className={styles.title}>Пользовательское соглашение</h2>
        {TEXT_DATA.map((text) => (<p className={styles.text}>{text}</p>))}
      </div>
    </Popup>
  );
};

export default TextPopup;