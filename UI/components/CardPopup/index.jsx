import { useSelector } from 'react-redux'
import Popup from '@/UI/containers/Popup';
import ProductCard from '@/UI/components/ProductCard';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';

import TextPopup from '@/UI/components/TextPopup';

import styles from './styles.module.scss';
import { useState } from 'react';

const CardPopup = ({
  isOpen,
  onCloseButtonClick,
}) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  
  const handlePopupChange = () => {
    setIsOpenPopup((prevState) => !prevState);
  }

  return (
    <Popup 
      isShowCloseButton
      className={styles.popup}
      isOpen={isOpen}
      onCloseButtonClick={onCloseButtonClick}
    >
      <div className={styles.popupHeader}>
        <div className={styles.productCardList}>
          {cart.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div>
          <p>Итого 107.9р</p>
          <p>1 шт.</p>
        </div>
      </div>
      <div className={styles.popupMain}>
        <p>Выберите способ доставки</p>
        <p>Доставляете осуществляется бесплатно, заказ оплачивется при получении наличными или картой</p>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <div>
          <TextField
            id="filled-name"
            label="Фамилия Имя Отчество"
            variant="filled"
            className={styles.textField}
          />
          <TextField
            id="filled-phone"
            label="Телефон"
            variant="filled"
            className={styles.textField}
          />
          <TextField
            id="filled-email"
            label="Email"
            variant="filled"
            className={styles.textField}
          />
          <TextField
            id="filled-address"
            label="Адрес"
            variant="filled"
            className={styles.textField}
          />
          <TextField
            id="filled-comment"
            label="Комментарий к заказу"
            variant="filled"
            className={styles.textField}
          />
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <span>
                  <span>Принимаю </span>
                  <span className={styles.link} onClick={handlePopupChange}>пользовательское соглашение </span>
                  <span>и даю согласие на </span>
                  <span className={styles.link} onClick={handlePopupChange}>обработку персональных данных</span>
                </span>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Подтверждаю, что мне больше 18-ти лет" 
            />
          </FormGroup>
        </div>
        <p>Для подтверждения возраста с вами через Telegram свяжется наш менеджер</p>
        <Button
          variant="contained"
          className={styles.button}
        >
          ОФОРМИТЬ ЗАКАЗ
        </Button>
      </div>
      <TextPopup
        isOpen={isOpenPopup}
        onCloseButtonClick={handlePopupChange}
      />
    </Popup>
  );
};

export default CardPopup;