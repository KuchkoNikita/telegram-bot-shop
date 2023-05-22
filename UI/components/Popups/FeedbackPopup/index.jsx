import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import styles from './styles.module.scss';

const FeedbackPopup = ({ isOpen, handleClose, children }) => (
  <Modal
    open={isOpen}
    onClose={handleClose}
  >
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <IconButton
          variant="text"
          onClick={handleClose}
          className={styles.closeButton}
        >
          <CloseIcon className={styles.icon} />
        </IconButton>
        {children}
      </div>
    </div>
  </Modal>
);

export default FeedbackPopup;
