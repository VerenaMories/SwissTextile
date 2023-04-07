import React from 'react';
import blog from '../images/test.jpg'

export default function Footer() {
    const today = new Date();

  return (
<>
<footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-4 col-md-4 col-xs-6">
                        <div class="widget about-widget">
                            <h3><a  class="logo" style={{textDecoration:'none', fontFamily:'Maya'}}>The Egyptian Swiss Textile</a></h3>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laborio, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.</p>
                        </div>
                    </div>

                    <div class="col col-lg-4 col-md-4 col-xs-6">
                        <div class="widget site-map-widget">
                            <h3 style={{fontFamily:'Maya'}}>Navigation</h3>
                            <ul>
                                <li><a style={{textDecoration:'none'}}>Home</a></li>
                                <li><a style={{textDecoration:'none'}}>About</a></li>
                                <li><a style={{textDecoration:'none'}}>Gallery</a></li>
                                <li><a style={{textDecoration:'none'}}>Blog</a></li>
                                <li><a style={{textDecoration:'none'}}>Products</a></li>
                                <li><a style={{textDecoration:'none'}}>Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* <div class="col col-lg-3 col-md-3 col-xs-6">
                        <div class="widget news-widget">
                            <h3 style={{fontFamily:'Maya'}}>Recent news</h3>
                            <ul>
                                <li>
                                    <div class="entry-media">
                                        <img src={blog} alt/>
                                    </div>
                                    <div class="entry-details">
                                        <h5><a  style={{textDecoration:'none'}}>New ch017y concrete mixer is bought</a></h5>
                                        <span class="date">19 FEB</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="entry-media">
                                        <img src={blog} alt/>
                                    </div>
                                    <div class="entry-details">
                                        <h5><a  style={{textDecoration:'none'}}>New ch017y concrete mixer is bought</a></h5>
                                        <span class="date">16 FEB</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}

                    <div class="col col-lg-4 col-md-4 col-xs-6">
                        <div class="widget newsletter-widget">
                            <h3 style={{fontFamily:'Maya'}}>Subscription</h3>
                            <p>Enter your email address to subscribe our weekly newsletter</p>
                            <form class="form">
                                <div>
                                    <input type="text" class="form-control" placeholder="email address"/>
                                    <button class="btn" type="submit"><i class="fa-regular fa-paper-plane"></i></button>
                                </div>

                            </form>
                        </div>

                        <div class="widget social-media-widget">
                            <ul class="social-links">
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-google-plus-g"></i></a></li>
                                <li><a  style={{textDecoration:'none'}}><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <div className="row">
                <div
          class="footer-copyright"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="container" >
            <div
              className="row "
              style={{ display: "flex", justifyContent: "center" }}
            >
              {/* <div className="col-md-6 ">
              <div className="row" style={{ display: "block" }}>
                <a
                  href="https://neoneg.com/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  www.neoneg.com
                </a>
              
              </div>
            </div> */}
              <div
                className="col-md-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "15px",
                    lineHeight: "1.8",
                    fontWeight: "700",
                    fontFamily: "Segoe UI",
                    color: "#fff",
                  }}
                >
                  Copyright &copy; {today.getFullYear()} by{" "}
                  <span>
                    {" "}
                    <a
                      target="_blank"
                      href="https://neoneg.com/"
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                    >
                      NEON
                    </a>{" "}
                  </span>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                    onClick={() => {
                      window.open(`https://wa.me/+201113588988`);
                    }}
                  >
                    <i
                      className="fa-brands fa-whatsapp fs-5"
                      style={{ color: "#fff", marginRight: "10px" }}
                    ></i>
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
                </div>
            </div>
        </footer>
</>  )
}
