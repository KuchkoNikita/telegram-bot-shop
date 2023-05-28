import FeedbackPopup from '@/UI/HOC/FeedbackPopup';
import styles from './styles.module.scss';

const FailedFeedbackPopup = ({ isOpen, handleClose }) => (
  <FeedbackPopup
    isOpen={isOpen}
    handleClose={handleClose}
  >
    <h3>Возникла ошибка при отправке формы 😢</h3>
    <p>
      Попробуйте снова или напишите
      {' '}
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer"
      >
        нам
      </a>
    </p>
  </FeedbackPopup>
);

export default FailedFeedbackPopup;