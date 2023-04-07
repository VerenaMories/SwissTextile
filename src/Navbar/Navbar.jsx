import React from 'react'
import logo from '../images/Agaybi 2.png';
import {Link} from 'react-router-dom';
// import './Navbar.scss'
// import '../Sass/Main.scss'
import '../App.css'

export default function Navbar() {
  return (
<>
<header class="site-header header-style-3">
            <div class="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col col-sm-6 contact-info">
                            <ul>
                                <li><i class="fa-regular fa-envelope" aria-hidden="true"></i>  test@neon.com</li>
                                <li><i class="fa fa-volume-control-phone" aria-hidden="true"></i>  +20 244 564 541</li>
                            </ul>
                        </div>
                        <div class="col col-sm-6 language-login-wrapper">
                            <div class="language-login clearfix">
                                <div class="language">
                                    <i class="fa fa-globe" aria-hidden="true"></i> Lang:
                                  
                                        <select class="selectpicker">
                                            <option>ENG</option>
                                            <option>Ar</option>
                                            <option>French</option>

                                            <option>Spain</option>

                                        </select>
                                  
                                </div>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link class="navbar-brand"  style={{width:'40%'}}  to="/"><img src={logo} style={{width:'20%'}}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav  mb-2 mb-lg-0" style={{display:'flex', justifyContent:'space-evenly', width:'70%'}}>
                            <li class="nav-item ">
                                <Link className='nav-item' to='/' style={{textDecoration:'none', color:'#C0AB89'}}>Home</Link>
                               
                            </li>
                            <li><Link className='nav-item' to='/about'  style={{textDecoration:'none', color:'#C0AB89'}}>About</Link></li>
                            <li class="nav-item">
                                <Link className='nav-item' to='/products'  style={{textDecoration:'none', color:'#C0AB89'}}>Products</Link>
                                {/* <ul class="sub-menu">
                                    <li><Link className='nav-item' to='/Product1'  style={{textDecoration:'none', color:'#C0AB89'}}>Projects style 1</Link></li>
                                    <li><Link className='nav-item' to='/Product2'  style={{textDecoration:'none', color:'#C0AB89'}}>Projects style 2</Link></li>
                                    <li><Link className='nav-item' to='/Product3'  style={{textDecoration:'none', color:'#C0AB89'}}>Projects style 3</Link></li>
                                </ul> */}
                            </li>
                            <li class="nav-item">
                                <Link className='nav-item' to='/galleryHome'  style={{textDecoration:'none', color:'#C0AB89'}}>Gallery</Link>
                                {/* <ul class="sub-menu">
                                    <li><a href="service-single.html">Service single</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="time-line.html">Time line</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="clients.html">Clients</a></li>
                                    <li><a href="careers.html">Careers</a></li>
                                    <li class="nav-item">
                                        <a href="#Level3">Testimonials</a>
                                        <ul class="sub-menu">
                                            <li><a href="testimonials-s1.html">Testimonials style 1</a></li>
                                            <li><a href="testimonials-s2.html">Testimonials style 2</a></li>
                                        </ul>
                                    </li>
                                </ul> */}
                            </li>
                            <li class="nav-item">
                                <Link className='nav-item' to='/blog'  style={{textDecoration:'none', color:'#C0AB89'}}>Blog</Link>
                                {/* <ul class="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                    <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                    <li><a href="blog-single.html">Blog single</a></li>
                                </ul> */}
                            </li>
                            <li><Link className='nav-item' to='/contact'  style={{textDecoration:'none', color:'#C0AB89'}}>Contact</Link></li>
                        </ul>
    </div>
      <div class="social-links-holder">
                        <ul class="social-links">
                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss"></i></a></li>
                        </ul>
                    </div>
  </div>
</nav>
       
        </header>
</>  )
}
