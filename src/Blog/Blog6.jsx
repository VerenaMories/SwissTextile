import React from 'react'
import Fade from 'react-reveal/Fade';
import firstBlog from '../images/STTI.jpg';

export default function Blog6() {
  return (
<>
<div class="page-title">
            <div class="container">
            <Fade top duration={1000} delay={500}>  <h1 style={{color:'#C0AB89', fontFamily:'Millania', fontSize:'80px'}}>Blog</h1></Fade>

                {/* <h1>Blog</h1> */}
            </div>
        </div>
        <section>
            <div className="container p-5">
                <div className="row" style={{display:'flex', justifyContent:'center'}}>
                    <div className="col-md-8">
                        <h1 style={{color:'#C0AB89', fontFamily:'Maya'}}>STTI coalition welcomes improvement purchasing practices by BRM</h1>
                    </div>
                    <div className="col-md-8" >
                        <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The Sustainable Terms of Trade Initiative (STTI) which is a coalition of garment manufacturers has welcomed the new update to the Higg Brand & Retail Module (BRM) as a “useful first step” but says more efforts are needed.</p>
                      
                      <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={firstBlog} alt="" /> </div> 
                        <p  style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The Sustainable Terms of Trade Initiative (STTI) was instituted by manufacturers from nine countries in 2021 to spell out the practices expected from the brands and retailers that buy their products. The Higg BRM was asked by STTI for an update on its purchasing practices. The request was accompanied by a revised questionnaire in this regard.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The STTI in a statement appreciated the new version of Higg BRM describing it as a “useful first step”, however, it said more improvements of the purchasing practice questions would be necessary. Elaborating its point the STTI desires the BRM to incorporate a larger portion of its questions about purchasing practices that reflect the importance of social and environmental conditions in the apparel supply chain.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>STTI spokesman Miran Ali appreciated that the SAC has been receptive to its recommendations and BRM’s definition of good purchasing practices clearly reflected the concern on social and environmental issues. The resulting revised purchasing practices set of questions within the Higg Brand & Retail assessment he added is definitely a step in the right direction in the quest for the necessary improvement of purchasing practices.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>STTI officials clarified that it will judge the success of the new BRM purchasing practices questions on seeing the actual improvement of the commercial compliance of its users.

</p>
                

                    </div>
                </div>
            </div>
        </section>
</>  )
}
