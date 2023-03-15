import cn from 'classnames'
import styles from './styles.module.scss';

const Burger = ({
  onClick,
  className,
  isNavigationOpen,
}) => {
  
  return (
    // <button className={cn(styles.burger, className)} onClick={onClick}>Open</button>
    <div onClick={onClick} className={cn(styles.burger, {[styles.burgerActive]: isNavigationOpen})}>
      <span className={cn(styles.line, styles.line1)}></span>
      <span className={cn(styles.line, styles.line2)}></span>
      <span className={cn(styles.line, styles.line3)}></span>
    </div>
  );
  // <div 
  //   onClick={onClick}
  //   className={cn(style.mobile_btn, className)}
  // >
  //   {isNavigationOpen 
  //     ? <AiOutlineClose size={25} />
  //     : <AiOutlineMenu size={25} />
  //   }
  // </div>
};

export default Burger;