import Chip from '@mui/material/Chip';
import cn from 'classnames';
import styles from './styles.module.scss';

const Tag = ({ label, className, onClick }) => {
  return (
    <Chip 
      label={label}
      variant="outlined"
      onClick={onClick}
      className={cn(styles.tag, className)}
    />
  );
};

export default Tag;