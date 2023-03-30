import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { RADIO_CONTROL_DATA } from './utils/constant';
import styles from './styles.module.scss';

const FeedbackForm = ({ onChange }) => (
  <FormControl>
    <RadioGroup
      name="radio-buttons-group"
      defaultValue={RADIO_CONTROL_DATA[0].value}
      onChange={onChange}
    >
      {RADIO_CONTROL_DATA.map(({ value, label }) => (
        <FormControlLabel
          key={value}
          value={value}
          label={label}
          control={(
            <Radio
              classes={{
                root: styles.radioButton,
                checked: styles.radioButton,
              }}
            />
          )}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default FeedbackForm;
