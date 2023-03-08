import React, { useRef } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import Button from '@/UI/components/Button';
import Svg from '@/UI/components/Svg';
import ArrowButton from '@/UI/components/ArrowButton';
import introImage1 from '@/assets/image/Intro/introImage1.png';
import { SVG_IMAGES_TYPES } from '@/utils/constants';
import styles from './styles.module.scss';

const Intro = () => {
  return (
    <section className={styles.section}>
      <Carousel 
        className={styles.carousel}
        nextIcon={<ArrowButton className={styles.nextIcon} />}
        prevIcon={<ArrowButton className={styles.prevIcon} />}
      >
        <Carousel.Item
          className={styles.slide}
          interval={100000000000}
        >
          <div className={styles.slideWrapper}>
            <div className={styles.infoBlock}>
              <p className={styles.slideSubtitle}>Суперскидка до 60%</p>
              <h2 className={styles.slideTitle}>НА БРИЛЛИАНТЫ</h2>
              <Button className={styles.button}>Подробнее</Button>
            </div>
            <div>
              <Image
                src={introImage1}
                width={548}
                height={548}
              />
            </div>
          </div>
          <Svg 
            type={SVG_IMAGES_TYPES.brilliantBig}
            width={832}
            hight={642}
            className={styles.backgroundImage}
          />
        </Carousel.Item>
        <Carousel.Item
          className={styles.slide}
          interval={500}
        >
          <div className={styles.slideWrapper}>
            <div className={styles.infoBlock}>
              <p className={styles.slideSubtitle}>Суперскидка до 60%</p>
              <h2 className={styles.slideTitle}>НА БРИЛЛИАНТЫ</h2>
              <Button className={styles.button}>Подробнее</Button>
            </div>
            <div>
              <Image
                src={introImage1}
                width={548}
                height={548}
              />
            </div>
          </div>
          <Svg 
            type={SVG_IMAGES_TYPES.brilliantBig}
            width={832}
            hight={642}
            className={styles.backgroundImage}
          />
        </Carousel.Item>
        <Carousel.Item className={styles.slide}>
          <div className={styles.slideWrapper}>
            <div className={styles.infoBlock}>
              <p className={styles.slideSubtitle}>Суперскидка до 60%</p>
              <h2 className={styles.slideTitle}>НА БРИЛЛИАНТЫ</h2>
              <Button className={styles.button}>Подробнее</Button>
            </div>
            <div>
              <Image
                src={introImage1}
                width={548}
                height={548}
              />
            </div>
          </div>
          <Svg 
            type={SVG_IMAGES_TYPES.brilliantBig}
            width={832}
            hight={642}
            className={styles.backgroundImage}
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Intro;