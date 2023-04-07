import React from 'react'
import img1 from '../images/blackFabric (1).jpg';
import img2 from '../images/blackFabric (2).jpg';
import img3 from '../images/blackFabric (3).jpg';
import img4 from '../images/blackFabric (4).jpg';
import img5 from '../images/blackFabric (5).jpg';
import img6 from '../images/blackFabric (8).jpg';
import img7 from '../images/blackFabric (7).jpg';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { TRUE } from 'node-sass';

export default function LastestProjects() {
  return (
<>

<div class="container-fluid">
                <div class="row">
                    <div class="projects-s3-grids project-s3-slider">
                    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation={{ nextEl: null, prevEl: null }}
      loop={true}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    > 
     <SwiperSlide>  <div class="grid">
                            <div class="img-holder">
                                <img src={img1} alt/>
                            </div>
                            <div class="details">
                                <h3><a style={{textDecoration:'none'}}>Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                                <img src={img2} alt/>
                            </div>
                            <div class="details">
                                <h3><a style={{textDecoration:'none'}}>Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide> <div class="grid">
                            <div class="img-holder">
                                <img src={img3} alt/>
                            </div>
                            <div class="details">
                                <h3><a style={{textDecoration:'none'}}>Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>   <div class="grid">
                            <div class="img-holder">
                                <img src={img4} alt/>
                            </div>
                            <div class="details">
                                <h3><a style={{textDecoration:'none'}}>Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                                <img src={img5} alt/>
                            </div>
                            <div class="details">
                                <h3><a style={{textDecoration:'none'}}>Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide><div class="grid">
                            <div class="img-holder">
                                <img src={img6} alt/>
                            </div>
                            <div class="details">
                                <h3><a style={{textDecoration:'none'}}>Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>    <div class="grid">
                            <div class="img-holder">
                                <img src={img7} alt/>
                            </div>
                            <div class="details">
                                <h3><a style={{textDecoration:'none'}}>Exo Sys Elixir Refiniry</a></h3>
                                <p><i class="fa fa-map-marker"></i> Rotterdam, Netherlands</p>
                            </div>
                        </div></SwiperSlide>
    </Swiper>
                        
                       
                      
                        
                        
                     
                    </div>
                </div> 

                <div class="all-projects">
                    <a style={{textDecoration:'none'}} class="theme-btn-s2">All projects</a>
                </div>
            </div>
</>  )
}
