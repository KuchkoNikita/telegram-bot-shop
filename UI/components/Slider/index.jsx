import Image from 'next/image';
import { useState } from 'react';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const ImageSlider = ({
  images,
  imageWidth,
  imageHeight,
  onClick,
  onImageChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeChange = (_, newIndex) => {
    console.log('& beforeChange newIndex: ', newIndex);
    setCurrentIndex(newIndex);
    onImageChange(images[currentIndex].color);
  };

  const afterChange = (current) => {
    console.log('& afterChange current: ', current);
  };


  return (
    <Slider
      {...settings}
      beforeChange={beforeChange}
      afterChange={afterChange}
    >
      {images.map((image) => (
        <div>
          <Image
            onClick={onClick}
            src={image.src}
            alt="Picture of the author"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider