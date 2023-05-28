import FeedbackPopup from '@/UI/HOC/FeedbackPopup';
import styles from './styles.module.scss';

const SuccessFeedbackPopup = ({ isOpen, handleClose }) => (
  <FeedbackPopup
    isOpen={isOpen}
    handleClose={handleClose}
  >
    <h3>Мы обрабатываем ваш заказ 😜</h3>
    <p>
      Скоро с вами свяжеться менеджер, для уточнения возраста и информации по заказу
    </p>
  </FeedbackPopup>
);

export default SuccessFeedbackPopup;