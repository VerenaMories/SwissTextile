import React from 'react'
import Partenr1 from '../images/Logo-Ipsum-2.png';
import Partenr2 from '../images/Logo-Ipsum-2.png';
import Partenr3 from '../images/Logo-Ipsum-2.png';
import Partenr4 from '../images/Logo-Ipsum-2.png';
import Partenr5 from '../images/Logo-Ipsum-2.png';
import Partenr6 from '../images/Logo-Ipsum-2.png';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { TRUE } from 'node-sass';

export default function PartenrsSlide() {
  return (
<>

                    <div class="col col-xs-12">
                        <div class="partners-slider">
                    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation={{ nextEl: null, prevEl: null }}
      loop={true}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    > 
     <SwiperSlide> <div class="grid">
                                <img src={Partenr1} alt class="img img-responsive"/>
                            </div></SwiperSlide>
                        <SwiperSlide>  <div class="grid">
                                <img src={Partenr2} alt class="img img-responsive"/>
                            </div> </SwiperSlide>
                        <SwiperSlide>   <div class="grid">
                                <img src={Partenr3} alt class="img img-responsive"/>
                            </div></SwiperSlide>
                        <SwiperSlide>   <div class="grid">
                                <img src={Partenr4} alt class="img img-responsive"/>
                            </div></SwiperSlide>
                        <SwiperSlide>  <div class="grid">
                                <img src={Partenr5} alt class="img img-responsive"/>
                            </div> </SwiperSlide>
                        <SwiperSlide>  <div class="grid">
                                <img src={Partenr6} alt class="img img-responsive"/>
                            </div> </SwiperSlide>
                      
    </Swiper>
                        
    </div>
                    </div> 
                      
                        
                        
                
</>  )
}
