
import React from 'react';
import styles from './main.module.css'
import Card from './Card';

import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import "swiper/css/bundle";






function Main() {
    return (

        <div className={styles.main}>
            <Swiper

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={'auto'}

                loop={true}
                // slidesPerView={1}
                navigation
                className={styles.swiper}
                breakpoints={{
                    //when window is larger >= 340px
                    340: {
                        // spaceBetween: 4,
                        // slidesPerView: 1.5,
                    },
                    //when window is >= 768px
                    768: {
                        // spaceBetween: 4,
                        // slidesPerView: 1.5,
                    },
                    //when window is >= 1040px
                    1040: {
                        // spaceBetween: 4,
                        // slidesPerView: 1.5,
                    },
                }}

            >
                <SwiperSlide className={styles.swiper_slide} >
                    <Card image={require('../../Assets/Images/yoga1.jpg')} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}><Card image={require('../../Assets/Images/wedd.jpg')}

                /></SwiperSlide >
                <SwiperSlide className={styles.swiper_slide}><Card image={require('../../Assets/Images/yoga2.jpg')}

                /></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}><Card image={require('../../Assets/Images/yoga2.jpg')}

                /></SwiperSlide>


            </Swiper>
        </div >


        // <section className={styles.main}>

        //     <div className={styles.slider_container}>
        //         <Swiper
        //             modules={[Navigation, Pagination, Scrollbar, A11y]}
        //             spaceBetween={50}
        //             slidesPerView={3}
        //             navigation
        //             breakpoints={{
        //                 //when window is larger >= 340px
        //                 340: {
        //                     width: 200,
        //                     slidesPerview: 1,
        //                 },
        //                 //when window is >= 768px
        //                 768: {
        //                     width: 768,
        //                     slidesPerView: 2,
        //                 },
        //                 //when window is >= 1040px
        //                 1040: {
        //                     width: 1040,
        //                     slidesPerView: 3,
        //                 },
        //             }}

        //             onSlideChange={() => console.log('slide change')}

        //             onSwiper={(swiper) => console.log(swiper)}
        //         >
        //             <SwiperSlide>
        //                 <Card image={require('../../Assets/Images/IMG_6258-2.jpg')}

        //                 />

        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card image={require('../../Assets/Images/IMG_3320 justed.jpg')}

        //                 />

        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card image={require('../../Assets/Images/rooftop-1537.jpg')}

        //                 />

        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card image={require('../../Assets/Images/CErund3.jpg')}
        //                     make='teaxt'
        //                 />

        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card image={require('../../Assets/Images/CErund3.jpg')}

        //                 />

        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <Card image={require('../../Assets/Images/CErund3.jpg')}

        //                 />

        //             </SwiperSlide>


        //         </Swiper>
        //     </div>
        // </section >
    )
}

export default Main; 