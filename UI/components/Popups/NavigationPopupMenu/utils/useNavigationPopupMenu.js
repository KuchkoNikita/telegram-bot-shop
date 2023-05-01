import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearActiveTag } from '@/redux/slice/activeTagSlice';

export const useNavigationPopupMenu = ({
  isBurgerMenu,
  onCloseClick,
}) => {
  const dispatch = useDispatch();

  const [isOpenPods, setIsOpenPods] = useState(false);
  const [isOpenHookah, setIsOpenHookah] = useState(false);
  const [isOpenEliquid, setIsOpenEliquid] = useState(false);

  const handlPodsMenuClick = () => {
    setIsOpenPods((prevState) => !prevState);
  };

  const handlHookahMenuClick = () => {
    setIsOpenHookah((prevState) => !prevState);
  };

  const handleEliquidSecondLevel = () => {
    setIsOpenEliquid((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    onCloseClick();
    dispatch(clearActiveTag());
  };

  return {
    isBurgerMenu,
    handleLinkClick,
    isOpenPods,
    isOpenHookah,
    isOpenEliquid,
    handlPodsMenuClick,
    handlHookahMenuClick,
    handleEliquidSecondLevel,
  };
};
