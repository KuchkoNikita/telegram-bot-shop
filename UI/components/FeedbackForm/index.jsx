import styles from './styles.module.scss';

const FeedbackForm = () => {
  return (
    <div className={styls.form}>
      <input placeholder='Фамилия Имя Отчество' />
      <input placeholder='Телефон' />
      <input placeholder='Email' />
    </div>
  )
};

export default FeedbackForm;