import { useState, useEffect } from 'react';

function ScrollCounter() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollBottom = scrollTop + windowHeight;
      const scrollHeight = documentHeight - windowHeight;
      const percentage = Math.round((scrollBottom / scrollHeight) * 100);
      setScrollPercentage(percentage > 100 ? 100 : percentage); // Cap at 100%
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p>Scroll Percentage: {scrollPercentage}%</p>
      <div style={{ height: '300vh' }}> {/* A tall element to enable scrolling */}
        {/* Your content here */}
      </div>
    </div>
  );
}
export default ScrollCounter()