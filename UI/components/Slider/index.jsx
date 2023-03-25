import Image from 'next/image';
import cn from 'classnames';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './styles.module.scss';

const Slider = ({
  images,
  imageWidth,
  imageHeight,
  onClick,
  onImageChange,
  className,
}) => {
  const onSlideChange = ({ activeIndex }) => {
    onImageChange(images[activeIndex].color);
  };

  console.log('images: ', images);

  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, A11y]}
      onSlideChange={onSlideChange}
      className={cn(className, styles.slider)}
      pagination={{
        type: 'bullets',
        clickable: true,
        bulletClass: styles.swiperBullet,
        bulletActiveClass: styles.swiperBulletActive,
      }}
    >
      {images.map(({ src, title }) => (
        <SwiperSlide key={`${src}-${title}`}>
          <Image
            onClick={onClick}
            src={src}
            alt="Picture of the author"
            width={imageWidth}
            height={imageHeight}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;