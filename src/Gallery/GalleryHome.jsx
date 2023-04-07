import React from 'react'
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import Factory from '../images/blackFabric (8).jpg';
import Branch1 from '../images/howWeWork.jpg';
import Branch2 from '../images/blackFabric (3).jpg';
import { Link } from 'react-router-dom';

export default function GalleryHome() {
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'80px'}}>Gallery</h1></Fade>

            </div>
        </div>
        <section class="blog-content-section section-padding">
            <div class="container">
      
 <Element name='blog'>
  <div class="row blog-s2-grids">
    <div class="col-md-4">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={Factory} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Factory</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/gallery' style={{textDecoration:'none'}} class="read-more">Show Gallery</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={Branch1} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Branch 1</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/branch1' style={{textDecoration:'none'}} class="read-more">Show Gallery</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <div class="col-md-4">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={Branch2} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Branch 2</a></h3>
            {/* <span class="entry-date">30 November, 2018</span> */}
            <div class="entry-footer">
              <Link to='/branch2' style={{textDecoration:'none'}} class="read-more">Show Gallery</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </div>
</Element>

                          
            </div> 
        </section>
</>  )
}
