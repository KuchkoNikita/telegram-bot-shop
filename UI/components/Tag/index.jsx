import cn from 'classnames';
import styles from './styles.module.scss';

const Tag = ({ children, className, onClick, ...props }) => {
  return (
    <button 
      onClick={onClick}
      className={cn(styles.tag, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Tag;