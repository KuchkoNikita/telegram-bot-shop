import { vibrationClick } from '@/utils/helpers';

export const useAddProductButton = ({
  count,
  handlePlusClick,
  handleMinusClick,
}) => ({
  count,
  handlePlusClick, //: vibrationClick(handlePlusClick),
  handleMinusClick, //: vibrationClick(handleMinusClick),
});
