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
  const isTagActive = tagActive === tag;

  return (
    <Chip
      label={label}
      variant={
        isTagActive ? 'filled' : 'outlined'
      }
      onClick={onClick}
      className={
        cn(styles.tag, className, { [styles.activeTag]: isTagActive })
      }
    />
  );
};

export default Tag;
