import styles from './styles.module.scss';

const CounterButton = ({
  children,
  count,
  handlePlusClick,
  handleMinusClick,
}) => {
  return (
    <>
      {count === 0 
        ? <button onClick={handlePlusClick}>{children}</button>
        : (
          <div className={styles.buttonsWrapper}>
            <button onClick={handleMinusClick}>-</button>
            <p>{count}</p>
            <button onClick={handlePlusClick}>+</button>
          </div>
        )
      }
    </>
  );
}

export default CounterButton;