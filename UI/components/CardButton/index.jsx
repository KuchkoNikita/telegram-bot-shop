import styles from './styles.module.scss';

const CardButton = ({ count, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Купить {count}
    </button>
  )
};

export default CardButton;