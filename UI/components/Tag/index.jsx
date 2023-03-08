import cn from 'classnames';
import styles from './styles.module.scss';

const Tag = ({ children, className, ...props }) => {
  return (
    <button 
      className={cn(styles.tag, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Tag;