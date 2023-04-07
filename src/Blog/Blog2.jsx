import React from 'react'
import Fade from 'react-reveal/Fade';
import firstBlog from '../images/blog2.jpg';

export default function Blog2() {
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
                        <h1 style={{color:'#C0AB89', fontFamily:'Maya'}}>Will Industrial Engineers replace Traditional Production Managers?</h1>
                    </div>
                    <div className="col-md-8" >
                        <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>In the past decade, apparel manufacturing in Bangladesh has been revolutionized by innovative engineers that bring their expertise and knowledge to the industry. By replacing traditional production managers with technologically savvy engineers, exponential growth in connectivity and productivity of the Bangladeshi apparel industry has been observed. The engineers in the Bangladeshi apparel industry have become the backbone of the nation’s economy, by creating improved working conditions, and production processes, and delivering the highest quality products at greatly reduced costs. This article will explore how the most effective engineers have created a revolution in Bangladesh’s apparel production, from increased efficiency to innovations in fabric technologies.</p>
                      
                      <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={firstBlog} alt="" /> </div> 
                        <p  style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The engineer-led revolution in apparel manufacturing in Bangladesh has had a significant impact on the country’s economy and workforce. According to K Otsuka and T Sonobe in their 2011 article ‘Miraculous Growth and Stagnation in Post-MFA Apparel Manufacturing in Bangladesh’, the country’s apparel industry has grown exponentially since the 1990s, big thanks to the introduction of engineer-led technology. This technology has allowed for the automation of processes and the development of new production techniques, making the industry more efficient and cost-effective. As a result, the industry’s workforce and wages have increased significantly. Furthermore, the industry has become a major contributor to Bangladesh’s GDP, accounting for more than 13% of it in 2017 (Otsuka & Sonobe, 2011). This impressive growth has been beneficial to the country, creating jobs and generating income. However, it has also resulted in a lack of job security and poor working conditions in some areas, demonstrating the need for further reforms in the sector. Ultimately, the engineer-led revolution has been a positive force in the apparel manufacturing industry in Bangladesh, but its effects must be carefully managed in order to ensure the long-term prosperity of the country.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>In Bangladesh, automation has had a significant impact on the apparel manufacturing industry. According to a study conducted by MA Hoque, R Rasiah, F Furuoka and others (2021), automation has enabled apparel manufacturers in Bangladesh to make production processes faster, more efficient, and more cost-effective. The implementation of automation has enabled manufacturers to reduce their production costs, increase production capacity, and improve the quality of their products. Furthermore, automation has reduced labor costs and enabled manufacturers to increase their productivity and reduce their reliance on manual labor. This has allowed manufacturers to focus more on their core competencies and become more competitive in the global market. Moreover, automation has enabled manufacturers to reduce their environmental footprint, as they can reduce their energy costs by using more efficient machinery and reduce their waste by implementing more efficient processes. In conclusion, automation has had a positive impact on the apparel manufacturing industry in Bangladesh, as it has enabled manufacturers to become more competitive, reduce their labor costs, and create a more sustainable production process.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The impact of engineering on apparel manufacturing in Bangladesh has been profound. In a study by MM Islam, AM Khan, and MM Islam from 2013, it is noted that the development of engineering in Bangladesh has been a major factor in the increased productivity and efficiency of apparel manufacturing. The study found that improved engineering processes have led to higher levels of quality control, as well as more efficient production processes. Furthermore, the use of advanced technology has allowed for faster production times and better monitoring of the manufacturing process. This has resulted in higher production levels with lower labor costs, leading to increased profits for apparel manufacturers. The authors concluded that engineering is a critical factor in the success of apparel manufacturing in Bangladesh. This is largely due to the increased efficiency and productivity associated with engineering processes, which has allowed the country to remain competitive in the global market.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The revolution of engineers to replace traditional production managers in apparel manufacturing in Bangladesh has opened up possibilities for increased efficiency and improved environmental practices. Engineers are equipped with the skills and knowledge to optimize production processes by effectively implementing technology and automating manual labor. This allows the process to be optimized further while keeping labor costs down. Additionally, the shift to using engineers to lead production allows the sector to apply green technologies that are more efficient, reduce waste and energy consumption, improve working conditions, and create a more sustainable industry. As a result, more sustainable and efficient apparel production has become a reality in Bangladesh.</p>
                  
                    </div>
                </div>
            </div>
        </section>
</>  )
}
