export const useSlider = ({
  list,
  imageWidth,
  imageHeight,
  onClick,
  onImageChange,
  className,
}) => {
  const onSlideChange = ({ activeIndex }) => {
    onImageChange && onImageChange(list[activeIndex]);
  };

  return {
    list,
    imageWidth,
    imageHeight,
    onClick,
    className,
    onSlideChange,
  }
};