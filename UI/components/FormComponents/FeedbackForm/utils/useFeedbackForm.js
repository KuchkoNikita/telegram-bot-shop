import { useState } from 'react';
import { useFormik } from 'formik';
import { RADIO_CONTROL_DATA } from '@/utils/constants';
import { getTelegramUsername } from '@/utils/helpers';
import { getValidationSchema } from './helper';

export const useFeedbackForm = ({ onLinkClick, cart, className }) => {
  const [shippingOption, setShippingOption] = useState(RADIO_CONTROL_DATA[0].value);
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
  const [isOverEighteenChange, setIsOverEighteenChange] = useState(false);
  const [isOpenSuccessfulPopup, setIsOpenSuccessfulPopup] = useState(false);
  const [isOpenFailedPopup, setIsOpenFailedPopup] = useState(false);

  const disabledSubmitButton = isOverEighteenChange && isPrivacyPolicyChecked;

  const onSubmitForm = async (values) => {
    const { label: deliveryInfo } = RADIO_CONTROL_DATA
      .find((radioControl) => radioControl.value === shippingOption);

    const usernameTelegram = getTelegramUsername();

    const productsInCart = cart.map((product) => ({
      name: product.title,
      price: product.price,
      texture: product.productOption.texture,
    }));

    const formData = JSON.stringify({
      deliveryInfo,
      userInfo: {
        ...values,
        usernameTelegram,
      },
      ordersInfo: productsInCart,
    });

    const response = await fetch('http://localhost:4000/order', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    });

    if (response.ok) {
      setIsOpenFailedPopup(false);
      setIsOpenSuccessfulPopup(true);
    } else {
      setIsOpenSuccessfulPopup(false);
      setIsOpenFailedPopup(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      index: '',
      address: '',
      comment: '',
    },
    validationSchema: getValidationSchema(shippingOption),
    onSubmit: onSubmitForm,
  });

  const handleRadioButtonChange = (event) => {
    setShippingOption(event.target.value);
  };

  const handlePrivacyPolicyClick = () => {
    setIsPrivacyPolicyChecked((prevState) => !prevState);
  };

  const handleOverEighteenClick = () => {
    setIsOverEighteenChange((prevState) => !prevState);
  };

  const handleCloseSuccessfulPopup = () => setIsOpenSuccessfulPopup(false);

  const handleCloseFailedPopup = () => setIsOpenFailedPopup(false);

  return {
    formik,
    shippingOption,
    isPrivacyPolicyChecked,
    isOverEighteenChange,
    disabledSubmitButton,
    handleRadioButtonChange,
    handlePrivacyPolicyClick,
    handleOverEighteenClick,
    onLinkClick,
    className,
    isOpenSuccessfulPopup,
    isOpenFailedPopup,
    handleCloseSuccessfulPopup,
    handleCloseFailedPopup,
  };
};
