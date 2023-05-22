import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextFieldGroup from '@/UI/components/FormComponents/TextFieldGroup';
import RadioGroup from '@/UI/components/FormComponents/RadioGroup';
import CheckboxGroup from '@/UI/components/FormComponents/CheckboxGroup';
import FeedbackPopup from '@/UI/components/Popups/FeedbackPopup';
import { useFeedbackForm } from './utils/useFeedbackForm';
import styles from './styles.module.scss';

const FeedbackForm = (props) => {
  const {
    formik,
    shippingOption,
    isPrivacyPolicyChecked,
    isOverEighteenChange,
    disabledSubmitButton,
    handleRadioButtonChange,
    handlePrivacyPolicyClick,
    handleOverEighteenClick,
    onLinkClick,
    className,
    isOpenSuccessfulPopup,
    isOpenFailedPopup,
    handleCloseSuccessfulPopup,
    handleCloseFailedPopup,
  } = useFeedbackForm(props);

  return (
    <form
      className={className}
      onSubmit={formik.handleSubmit}
    >
      <RadioGroup onChange={handleRadioButtonChange} />
      <TextFieldGroup
        formik={formik}
        className={styles.textFieldGroup}
        shippingOption={shippingOption}
      />
      <CheckboxGroup
        isOverEighteenChange={isOverEighteenChange}
        isPrivacyPolicyChecked={isPrivacyPolicyChecked}
        onLinkClick={onLinkClick}
        onPrivacyPolicyClick={handlePrivacyPolicyClick}
        onOverEighteenClick={handleOverEighteenClick}
      />
      <Typography className={styles.feedbackFormText}>
        Для подтверждения возраста с вами через Telegram свяжется наш менеджер
      </Typography>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        className={styles.button}
        disabled={!disabledSubmitButton}
      >
        ОФОРМИТЬ ЗАКАЗ
      </Button>
      <FeedbackPopup
        isOpen={isOpenSuccessfulPopup}
        handleClose={handleCloseSuccessfulPopup}
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
      <FeedbackPopup
        isOpen={isOpenFailedPopup}
        handleClose={handleCloseFailedPopup}
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
    </form>
  );
};

export default FeedbackForm;
