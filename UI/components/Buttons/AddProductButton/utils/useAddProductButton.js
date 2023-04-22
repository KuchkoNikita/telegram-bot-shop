export const useAddProductButton = ({
  count,
  handlePlusClick,
  handleMinusClick,
}) => {
  const vibrationClick = (fn) => () => {
    if (typeof window !== 'undefined') {
      window.navigator.vibrate(200);
    }

    fn();
  };

  return {
    count,
    handlePlusClick: vibrationClick(handlePlusClick),
    handleMinusClick: vibrationClick(handleMinusClick),
  };
};
