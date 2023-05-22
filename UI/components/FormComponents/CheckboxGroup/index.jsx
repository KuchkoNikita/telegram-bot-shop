import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { TYPE_TEXT_POPUP } from '@/utils/constants';
import styles from './styles.module.scss';

const LabelPrivacyPolicy = ({ onLinkClick }) => (
  <>
    <span>Принимаю </span>
    <span
      className={styles.link}
      onClick={onLinkClick(TYPE_TEXT_POPUP.privacyPolicy)}
    >
      пользовательское соглашение
    </span>
    <span> и даю согласие на </span>
    <span
      className={styles.link}
      onClick={onLinkClick(TYPE_TEXT_POPUP.termsOfUse)}
    >
      обработку персональных данных
    </span>
  </>
);

const CheckboxGroup = ({
  onLinkClick,
  onOverEighteenClick,
  onPrivacyPolicyClick,
  isOverEighteenChange,
  isPrivacyPolicyChecked,
}) => (
  <FormGroup>
    <FormControlLabel
      value={isPrivacyPolicyChecked}
      onClick={onPrivacyPolicyClick}
      className={styles.controlLabel}
      control={
        <Checkbox classes={{ root: styles.checkbox, checked: styles.checkbox }} />
      }
      label={<LabelPrivacyPolicy onLinkClick={onLinkClick} />}
    />
    <FormControlLabel
      value={isOverEighteenChange}
      onClick={onOverEighteenClick}
      className={styles.controlLabel}
      label="Подтверждаю, что мне больше 18-ти лет"
      control={
        <Checkbox classes={{ root: styles.checkbox, checked: styles.checkbox }} />
      }
    />
  </FormGroup>
);

export default CheckboxGroup;
