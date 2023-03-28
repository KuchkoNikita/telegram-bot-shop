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
  list,
  imageWidth,
  imageHeight,
  onClick,
  onImageChange,
  className,
}) => {
  const onSlideChange = ({ activeIndex }) => {
    onImageChange && onImageChange(list[activeIndex].color);
  };

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
      {list.map(({ image }, index) => (
        <SwiperSlide key={`${index}-${image.src}`}>
          <Image
            onClick={onClick}
            src={image.src}
            alt="Picture of the author"
            width={imageWidth}
            height={imageHeight}
            className={styles.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;