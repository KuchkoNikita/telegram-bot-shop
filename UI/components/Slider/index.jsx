import Image from 'next/image';
import { useState } from 'react';
import Slider from "react-slick";
import styles from './styles.module.scss';

const AppendDots = ({ children }) => (
  <div
    style={{
      backgroundColor: "#ddd",
      borderRadius: "10px",
      padding: "10px"
    }}
  >
    <ul style={{ margin: "0px" }}>
      {children}
    </ul>
  </div>
);

const CustomPaging = ({ children }) => (
  <div
    style={{
      width: "30px",
      color: "blue",
      border: "1px blue solid"
    }}
  >
    {children}
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  appendDots: dots => (
    <div className={styles.dotsWrapper}           style={{
      padding: "3px", position: 'static'
    }}>
      <ul className={styles.dotsList}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      className={styles.dots}
    />
  )
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