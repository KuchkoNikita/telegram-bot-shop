const VIBRATION_CLICK_MILLISECONDS = 20;

export const useAddProductButton = ({
  count,
  handlePlusClick,
  handleMinusClick,
}) => {
  const vibrationClick = (fn) => () => {
    if (typeof window !== 'undefined') {
      window.navigator.vibrate(VIBRATION_CLICK_MILLISECONDS);
    }

    fn();
  };

  return {
    count,
    handlePlusClick: vibrationClick(handlePlusClick),
    handleMinusClick: vibrationClick(handleMinusClick),
  };
};
