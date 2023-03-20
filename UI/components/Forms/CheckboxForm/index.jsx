import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import styles from './styles.module.scss';

const RadioForm = () => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel 
          value="female"
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioForm;