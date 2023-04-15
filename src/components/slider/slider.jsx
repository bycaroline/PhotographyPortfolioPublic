import styles from './slider.module.css';
import React from 'react';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/bundle";

function Slider() {
    return (
        <div className={styles.swiper_container}>
            <Swiper
                loop={true}
                loopedSlides={3}
                // centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={6}
                className={styles.swiper_wrapper}
            >
                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yoga1.jpg')} className={styles.slide_image} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/wedd.jpg')} className={styles.slide_image} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yoga2.jpg')} className={styles.slide_image} />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default Slider; 