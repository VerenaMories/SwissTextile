import React, { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const ProgressBar = ({ percentage }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    progressRef.current.style.width = `${percentage}%`;
  }, [percentage]);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: 0 }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        ref={progressRef}
      ></div>
    </div>
  );
};

const ProgressSection = () => {
  return (<>
    <div className="col-md-6">
    <h6  style={{color:'#766345', fontSize:'48px', fontWeight:'600',textTransform:'capitalize', lineHeight:'1.2em', fontFamily:'Millania'}}>Specialist</h6>
    <Fade left duration={1000} delay={500}>  <h2 style={{color:'#766345', fontSize:'48px', fontWeight:'bold',textTransform:'capitalize', lineHeight:'1.2em', fontFamily:'Maya'}}>Your Satisfaction Is Our Priority</h2></Fade>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
    <Element className="col-md-6" name="progress-section">
      <div >
        <p style={{fontFamily:'Maya', fontSize:'20px'}}>Textile Services</p>
        <ProgressBar percentage={96} />
        <p style={{fontFamily:'Maya', fontSize:'20px'}}>Textile Materials</p>
        <ProgressBar percentage={75} />
        <p style={{fontFamily:'Maya', fontSize:'20px'}}>Specialist Fabrics</p>
        <ProgressBar percentage={80} />
        <p style={{fontFamily:'Maya', fontSize:'20px'}}>Leather Textile</p>
        <ProgressBar percentage={85} />
      </div>
    </Element>
    </>  );
};

export default ProgressSection;
