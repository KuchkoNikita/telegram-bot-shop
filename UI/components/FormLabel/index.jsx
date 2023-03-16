import styles from './styles.module.scss';

const FormLabel = () => {
  return (
    <div className={styles.form}>
      <div className={styles.formLabel}>
        Курьером по г.Минску
      </div>
      <div className={styles.formLabel}>
        Почтовыым отправлением
      </div>
      <div className={styles.formLabel}>
        Пункты выдачи "Европочта"
      </div>
    </div>
  )
};

export default FormLabel;