import cn from 'classnames'
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from './styles.module.scss';

const Burger = ({
  onClick,
  className,
  isNavigationOpen,
}) => {
  
  return (
    <button className={cn(styles.burger, className)} onClick={onClick}>Open</button>
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