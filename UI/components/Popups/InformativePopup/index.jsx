import Popup from '@/UI/containers/Popup';
import { getContentfulText } from '@/utils/contentfull';
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
        {getContentfulText(text)}
      </div>
    </div>
  </Popup>
);

export default InformativePopup;
