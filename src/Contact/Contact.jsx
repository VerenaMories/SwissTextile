import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Contact() {
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'80px'}}>Contact Us</h1></Fade>
                {/* <h1 style={{fontFamily:'Millania'}}>Contact</h1> */}
            </div>
        </div>
       
        <section class="contact-section">
            {/* <div class="contact-map" id="map"></div> */}
            <div class="container">
                <div class="row">
                    
                    <div class="col col-sm-6 ">
                        
                        <div class="contact-form">
                            <h3 style={{fontFamily:'Maya'}}>Contact Form</h3>
                            <ul>
                                <li><i class="fa fa-home"></i>M C T A Dr, Swiftwater, PA 18370</li>
                                <li><i class="fa fa-phone"></i>+20 244 564 541</li>
                            </ul>
                            <h4 style={{fontFamily:'Maya'}}>Send Email</h4>
                            <form class="form contact-validation-active" id="contact-form">
                                <div>
                                    <input type="text" name="name" class="form-control" placeholder="Full Name"/>
                                </div>
                                <div>
                                    <input type="email" name="email" class="form-control" placeholder="Email"/>
                                </div>
                                <div>
                                    <textarea name="note" class="form-control" placeholder="Message"></textarea>
                                </div>
                                <div class="submit">
                                <Fade left duration={1000} delay={500}>
    <button type="submit" style={{fontFamily:'Maya'}}>Send</button></Fade>
                                    <span id="loader"><img src="images/contact-ajax-loader.gif" alt="Loader"/></span>
                                </div>
                                <div class="error-handling-messages">
                                    <div id="success">Thank you</div>
                                    <div id="error"> Error occurred while sending email. Please try again later. </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col col-sm-6 p-3" style={{widgetSpacing: '20px'}}>
                    <Fade right duration={1000} delay={500}>    <div className="row">
<div className='elementor-widget-wrap elementor-element-populated' style={{position: 'relative',width: '100%',flexWrap: 'wrap',alignContent: 'flex-start',    display: 'flex', padding:'10px', justifyContent:'center'}}>
<div className='elementor-icon' style={{fontSize:'40px',padding:'20px 26px', backgroundColor:'#C0AB89', color:'#fff', borderRadius:'50%'}}>
<i class="fa-solid fa-phone"></i>

</div>
</div>
<h3 style={{textAlign:'center', fontFamily:'Maya'}}>Contact</h3>
<p  style={{textAlign:'center', padding:'0', margin:'0'}}>Factory: +20 244 564 541 - +20 244 564 540</p>
<p  style={{textAlign:'center', margin:'0'}}>Shubra Branch: +20 120 770 3244</p>
<p  style={{textAlign:'center', margin:'0'}}>Gesr El Suez Branch: +20 127 427 1266 - +20 127 535 5444</p>

{/* <p style={{textAlign:'center'}}>example@gmail.com</p> */}
</div></Fade>
<Fade right duration={1000} delay={500}>
    <div className="row">
<div className='elementor-widget-wrap elementor-element-populated' style={{position: 'relative',width: '100%',flexWrap: 'wrap',alignContent: 'flex-start',    display: 'flex', padding:'10px', justifyContent:'center'}}>
<div className='elementor-icon' style={{fontSize:'40px',padding:'20px 26px', backgroundColor:'#C0AB89', color:'#fff', borderRadius:'50%'}}>
<i class="fa-solid fa-location-dot"></i>

</div>
</div>
<h3 style={{textAlign:'center', fontFamily:'Maya'}}>Address</h3>
<p style={{textAlign:'center', margin:'0'}}>Factory: El-Shourok Industrial Area - Abo Zaabal - Al-Khanka - Al-Qalubia</p>
<p style={{textAlign:'center', margin:'0'}}>Shubra Branch: 15 May St, Abo El Hana Mosque Square, Shubra El Khima - Al-Qalubia</p>
<p style={{textAlign:'center', margin:'0'}}>Gesr El Suez Branch: Mohamed Ibrahim St, Behind 18 St, Cairo</p>

</div></Fade>
<Fade right duration={1000} delay={500}>
<div className="row">
<div className='elementor-widget-wrap elementor-element-populated' style={{position: 'relative',width: '100%',flexWrap: 'wrap',alignContent: 'flex-start',    display: 'flex', padding:'10px', justifyContent:'center'}}>
<div className='elementor-icon' style={{fontSize:'40px',padding:'20px 26px', backgroundColor:'#C0AB89', color:'#fff', borderRadius:'50%'}}>
<i class="fa-regular fa-clock"></i>

</div>
</div>
<h3 style={{textAlign:'center', fontFamily:'Maya'}}>Work Hours</h3>
<p style={{textAlign:'center', margin:'0'}}>Open Saturday – Friday</p>
<p style={{textAlign:'center', margin:'0'}}>09.00 – 22.00
</p></div></Fade>
                    </div>
                </div> 
              
            </div> 
        </section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.4359920263623!2d31.338421099999998!3d30.081697400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f71828fb8bf%3A0xde71d8dac7cabdc1!2sNeon%20Digital%20Agency!5e0!3m2!1sen!2seg!4v1680770582703!5m2!1sen!2seg" style={{border:'0'}} width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</>  )
}
