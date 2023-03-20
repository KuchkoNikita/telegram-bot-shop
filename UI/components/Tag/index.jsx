import Chip from '@mui/material/Chip';
import cn from 'classnames';
import styles from './styles.module.scss';

const Tag = ({ 
  tagActive, 
  label,
  tag,
  className,
  onClick,
}) => {
  return (
    <Chip 
      label={label}
      variant={
        tagActive === tag ? "filled" :"outlined"
      }
      onClick={onClick}
      className={cn(styles.tag, className)}
    />
  );
};

export default Tag;