import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveTagSelector } from '@/redux/selectors';
import { setActiveTag, clearActiveTag } from '@/redux/slice/activeTagSlice';

export const useTagsList = ({ tagsList }) => {
  const dispatch = useDispatch();
  const activeTag = useSelector(getActiveTagSelector);

  const onTagClick = useCallback((tag) => () => {
    dispatch(setActiveTag(tag));
  }, [dispatch]);

  const onAllTagClick = useCallback(() => {
    dispatch(clearActiveTag());
  }, [dispatch]);

  return {
    activeTag,
    tagsList,
    onTagClick,
    onAllTagClick,
  };
};
