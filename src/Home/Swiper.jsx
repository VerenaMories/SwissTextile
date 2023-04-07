// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import slider from '../images/hero-image.jpg';
import slider2 from '../images/hero-image.jpg';
import slider1 from '../images/hero-image.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MySwiperComponent = () => {

  return (
    <section class="hero hero-slider-wrapper hero-slider-s2">
    <div class="hero-slider">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={2}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <div class="slide">
                    <img src={slider} alt class="slider-bg"/>
                    <div class="container">
                        <div class="row slide-caption">
                            <div class="col col-md-8">
                                <h1 class="slide-title">This is the age of <span>Renovation</span> and <span>Discovery</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                <a href="#" class="theme-btn-s2">About us</a>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide> <div class="slide">
                    <img src={slider1} alt class="slider-bg"/>
                    <div class="container">
                        <div class="row slide-caption">
                            <div class="col col-md-8">
                                <h1 class="slide-title">This is the age of <span>Renovation</span> and <span>Discovery</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                <a href="#" class="theme-btn-s2">About us</a>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide>  <div class="slide">
                    <img src={slider2} alt class="slider-bg"/>
                    <div class="container">
                        <div class="row slide-caption">
                            <div class="col col-md-8">
                                <h1 class="slide-title">This is the age of <span>Renovation</span> and <span>Discovery</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                <a href="#" class="theme-btn-s2">About us</a>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
    
    </Swiper></div></section>
  );
};export default MySwiperComponent;