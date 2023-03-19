import { useSelector } from 'react-redux'
import Popup from '@/UI/containers/Popup';
import ProductCard from '@/UI/components/ProductCard';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';

import styles from './styles.module.scss';

const CardPopup = ({
  isOpen,
  onCloseButtonClick,
}) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log('cart: ', cart);

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
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </div>
      </div>
    </Popup>
  );
};

export default CardPopup;