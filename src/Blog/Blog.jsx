import React from 'react'
import blog1 from '../images/firstBlog.png';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/about.jpg';
import blog5 from '../images/big_Big.jpg';
import blog6 from '../images/STTI.jpg';
import blog7 from '../images/fiber.png';
import blog8 from '../images/image-34.png';
import blog9 from '../images/sora.jpg';

// import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
export default function Blog() {
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'80px'}}>Blogs</h1></Fade>

                {/* <h1>Blog</h1> */}
            </div>
        </div>
     
        <section class="blog-content-section section-padding">
            <div class="container">
            {/* <div class="row blog-s2-grids">
                    <div class="col col-md-4">
                        <div class="grid">
                            <div class="entry-media">
                                <img src={blog1} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
                            </div>
                            <div class="entry-details">
                                <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Approach to Assessing Supply Chain Risk</a></h3>
                                <span class="entry-date">30 November, 2018</span>

                                <div class="entry-footer">
                                    <a style={{textDecoration:'none'}} class="read-more">Read More</a>
                                    <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-4">
                        <div class="grid">
                            <div class="entry-media">
                                <img src={blog2} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
                            </div>
                            <div class="entry-details">
                                <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Approach to Assessing Supply Chain Risk</a></h3>
                                <span class="entry-date">30 November, 2018</span>

                                <div class="entry-footer">
                                    <a style={{textDecoration:'none'}} class="read-more">Read More</a>
                                    <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-4">
                        <div class="grid">
                            <div class="entry-media">
                                <img src={blog3} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
                            </div>
                            <div class="entry-details">
                                <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Approach to Assessing Supply Chain Risk</a></h3>
                                <span class="entry-date">30 November, 2018</span>

                                <div class="entry-footer">
                                    <a style={{textDecoration:'none'}} class="read-more">Read More</a>
                                    <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}
 <Element name='blog'>
  <div class="row blog-s2-grids">
    <div class="col-md-4">
      <Fade right>
        <div class="grid">
          <div class="entry-media">
            <img src={blog1} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Increasing the innovativeness of textile and apparel industry</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog1' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <img src={blog2} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Will Industrial Engineers replace Traditional Production Managers?</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog2' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <img src={blog3} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>10 Fabrics to Wear in Summer to Beat the Heat</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog3' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <img src={blog4} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Advancements in Fabric Weaving Technologies</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog4' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <img src={blog5} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Strategies for Textile & Apparel Sourcing</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog5' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <img src={blog6} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>STTI coalition welcomes improvement purchasing practices by BRM</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog6' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <img src={blog7} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Fiber from Milk Byproducts – a New Dimension</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog7' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <img src={blog8} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Future of Textiles with Nanotechnology</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog8' style={{textDecoration:'none'}} class="read-more">Read More</Link>
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
            <img src={blog9} style={{width:'-webkit-fill-available'}} alt class="img img-responsive"/>
          </div>
          <div class="entry-details">
            <h3><a style={{textDecoration:'none', fontFamily:'Maya'}}>Sustainability in Textile Processing
</a></h3>
            <span class="entry-date">30 November, 2018</span>
            <div class="entry-footer">
              <Link to='/blog9' style={{textDecoration:'none'}} class="read-more">Read More</Link>
              {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </div>
</Element>

                {/* <div class="pagination">
                    <ul>
                        <li class="current"><a  style={{textDecoration:'none'}}>1</a></li>
                        <li><a style={{textDecoration:'none'}}>2</a></li>
                        <li><a style={{textDecoration:'none'}}>3</a></li>
                    </ul>
                </div>                 */}
            </div> 
        </section>
</>  )
}
