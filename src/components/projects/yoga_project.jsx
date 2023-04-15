import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import styles from './projects.module.css'
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/bundle";

function Yoga_project() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div className={styles.swiper_container} data-aos='fade-up'>
            <Swiper
                loop={true}
                loopedSlides={3}
                // centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={6}
                className={styles.swiper_wrapper}
            >
                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yogaImages/IMG_7232.jpg')} className={styles.slide_image} />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yogaImages/IMG_7180.jpg')} className={styles.slide_image} />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yogaImages/IMG_6186.jpg')} className={styles.slide_image} />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yogaImages/IMG_6246.jpg')} className={styles.slide_image} />
                </SwiperSlide>


                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yogaImages/IMG_6258.jpg')} className={styles.slide_image} />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yogaImages/IMG_6266.jpg')} className={styles.slide_image} />
                </SwiperSlide>

                <SwiperSlide className={styles.swiper_slide} >

                    <img src={require('../../Assets/Images/yogaImages/IMG_6269.jpg')} className={styles.slide_image} />
                </SwiperSlide>

            </Swiper>
            <div className={styles.fillProjects}>

            </div>
            <div data-aos='fade-in' >
                <Footer />
            </div>
        </div >

    )
}

export default Yoga_project; 