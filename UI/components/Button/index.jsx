import cn from 'classnames';
import styles from './styles.module.scss';

const Button = ({ children, className, ...props }) => {
  return (
    <button 
      className={cn(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;