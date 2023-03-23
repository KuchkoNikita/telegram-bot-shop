import Image from 'next/image';
import { useState } from 'react';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageSlider = ({
  images,
  onClick,
  onImageChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeChange = (_, newIndex) => {
    setCurrentIndex(newIndex);
    onImageChange(images[currentIndex].color);
  };

  return (
    <div>
      <Slider
        {...settings}
        beforeChange={beforeChange}
      >
        {images.map((image) => (
          <div>
            <Image
              onClick={onClick}
              src={image.src}
              alt="Picture of the author"
              width={165}
              height={165}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider