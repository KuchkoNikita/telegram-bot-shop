import { useState } from 'react';
import { useFormik } from 'formik';
import { RADIO_CONTROL_DATA } from '@/UI/components/FormComponents/RadioGroup/utils/constant'
import { validationSchema } from './constant';

export const useFeedbackForm = ({ onLinkClick, className }) => {
  const [shippingOption, setShippingOption] = useState(RADIO_CONTROL_DATA[0].value);
  // Посмотреть почему не рбаотет чекбокс от состояния
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
  const [isOverEighteenChange, setIsOverEighteenChange] = useState(false);

  const disabledSubmitButton = isOverEighteenChange && isPrivacyPolicyChecked

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      index: '',
      address: '',
      comment: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
    },
  });

  const handleRadioButtonChange = (event) => {
    setShippingOption(event.target.value)
  };

  const handlePrivacyPolicyClick = () => {
    setIsPrivacyPolicyChecked(prevState => !prevState)
  }

  const handleOverEighteenClick = () => {
    setIsOverEighteenChange(prevState => !prevState)
  }

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
  }
};