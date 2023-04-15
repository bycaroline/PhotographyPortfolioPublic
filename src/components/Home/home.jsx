
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Main from '../main/main';
import Footer from '../footer/footer';
import Info from '../info/info';
import Slider from '../slider/slider';
import "swiper/css/bundle";


function Home() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])

    return (
        <div >
            <div data-aos='fade-up'>
                <  Slider />
            </div>
            <div data-aos='fade-up'>
                <Info />
            </div>
            <div data-aos='fade-in' >
                <Footer />
            </div>
        </div>
    )
}

export default Home; 