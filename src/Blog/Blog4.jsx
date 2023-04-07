import React from 'react'
import Fade from 'react-reveal/Fade';
import firstBlog from '../images/firstBlog.png';

export default function Blog1() {
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
                        <h1 style={{color:'#C0AB89', fontFamily:'Maya'}}>Advancements in Fabric Weaving Technologies</h1>
                    </div>
                    <div className="col-md-8" >
                        <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The emphasis on productivity and quality has developed the weaving technology very much and as a result the working hours required to weave fabric from loom have been reduced from about 20 to 0.25 during the last 125 years, and in the last 50 years there has been a reduction of 95% inoperative hours per standard unit produced.</p>
                        <h5>
                        Weaving technologies – then and now</h5>
                      {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={firstBlog} alt="" /> </div>  */}
                        <p  style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The weaving is a process of formation of fabric with interlacement of two or more sets of yarns using a stable machine called loom. It is still not certain when the weaving process was introduced to human society. Except for few activities elsewhere, the major developments in textile took place in England. In England, the major shift from agriculture to woolen industry came in the 14th century. During all these years and a few hundred years after the 14th century, the cloth was produced on hand-looms which were not equipped with a fly shuttle.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>In 1733, John Kay invented the fly shuttle which enabled weft to be inserted more rapidly. Edmund Cart Wright, an English clergyman, invented a so-called power loom which could be operated from a single point by two strong men. Fortunately, steam power was available by 1765. Soon power looms were driven by steam and most of the wooden parts were replaced with iron. These looms then were stopped every few minutes in order to replace the empty weft pirns or cop in the shuttle and this limited the number of looms, a weaver could operate to about four. James Northrop, an English man invented an automatic weft transfer system which replaced the weft pirn in the shuttle without slowing or stopping the loom in 1889.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>Similar developments took place elsewhere also, Ruti, a major loom maker of Switzerland manufactured automatic bobbin changing Northrop loom in 1898. After World War II, more productivity and efficiency were essential to overcome increasing labor costs in Western countries. Limitations of Shuttle Looms Despite the relatively high speed and efficiencies in the loom with conventional picking, the productivity of these machines will continue to be limited as long as their fundamental constructions involved the use of shuttle propulsion. It is known that the power required for picking is proportional to the cube of the loom speed. If the loom speed is increased from 200 to 300 picks per minute, the power requirement would increase by a factor of (3/2) 3 i.e. 3.4 times approximately.</p>
                   <h5>
                   Was the shuttle loom technology transmission necessary?</h5>

                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The emphasis on productivity and quality has developed the weaving technology very much and as a result the working hours required to weave fabric from loom have been reduced from about 20 to 0.25 during the last 125 years, and in the last 50 years there has been a reduction of 95% inoperative hours per standard unit produced. Majority of the developments are taking place on the shuttleless looms in the following directions:</p>
                   <ul className='dot-list'>
  <li>To increase the productivity of the loom.</li>
  <li>To make the looms more flexible for different kinds of fabric.</li>
  <li>To reduce the downtime for changing a style, etc.</li>
  <li>Application of electronic control mechanisms to increase automation</li>
  <li>Development of accessories such as dobby, jacquards, etc.</li>
 
</ul>

                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>In addition to these, the newer looms are simple in design, the motions are more reliable, consumes less energy and have a lower maintenance cost.</p>
                   <h5>
                   Disadvantages of Shuttle Looms
</h5>
<ul className='dot-list'>
  <li>Greater strain imposed on the picking mechanism, thus rendering it liable to frequent failure.</li>
  <li>The greater amount of noise and vibration.</li>
  <li>Because of superior energy in a shuttle, greater strain is again imposed on the checking mechanism.</li>
  <li>The movement of the shuttle will be more difficult to control and there will be a greater possibility of its ejection from the loom.</li>
</ul>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The dynamic problems created by the picking and checking mechanism and the inherent process of pirn winding for shuttle looms had encouraged the loom makers to develop alternative means of weft insertion in which heavy shuttle is not projected forwards and backward across the width of the loom. It is customary to refer these looms as shuttleless looms.</p>
                   <p style={{marginBottom:'17px', lineHeight:'1.7', fontSize:'17px' , color:'#666'}}>The various shuttleless looms that have been developed over a period of about 50 years can be classified into various groups.</p>
                   <ul className='dot-list'>
  <li>Projectile Looms</li>
  <li>Rapier Looms</li>
  <li>Fluid Jet Looms</li>
  <li>Multiphase Looms</li>
</ul>
<h5>
Advantages of Shuttleless Weaving Technology
</h5>
<ul className='dot-list'>
  <li>The Shuttleless weaving is becoming more and more popular due to the following advantages compared to conventional looms.</li>
  <li>High labor and machine productivity due to high speed and wider width of looms.</li>
  <li>Reduced labor cost due to a higher allocation of looms and productivity.</li>
  <li>Defect-free cloth for longer length.</li>
  <li>Better environment due to low noise level.</li>
  <li>Pirn winding process is eliminated.</li>
  <li>Less value loss of fabrics.</li>
  <li>Low consumption of stores and spares.</li>
  <li>Less space requirement per metre of cloth.</li>
  <li>More colors in weft direction (up to 12) by Pick and Pick method.</li>
  <li>Wider width fabrics and multi-width fabrics can be woven, High degree of flexibility to suit a wide range of fibers and counts.</li>
  <li>Easily adaptable to market trends.</li>
  <li>Bigger flanges can accommodate 3 times more yarn.</li>
  <li>Due to less beam changes lower downtime and lesser wastages.</li>
  <li>Less dependency on labor skill.</li>
  <li>Higher design capabilities due to microprocessor and electronic controls.</li>
  <li>Easy maintenance and less workload for Jobbers.</li>
  <li>Lesser accidents.</li>
</ul>
        

                    </div>
                </div>
            </div>
        </section>
</>  )
}
