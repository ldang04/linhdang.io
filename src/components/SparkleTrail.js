import React, { useEffect } from 'react';
import '../App.css'; 

const SparkleTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const arr = [1, 0.7, 0.4];

      arr.forEach((i) => {
        const x = (1 - i) * 75;
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${e.pageY + Math.round(Math.random() * x - x / 2)}px`;
        star.style.left = `${e.pageX + Math.round(Math.random() * x - x / 2)}px`;

        document.body.appendChild(star);

        setTimeout(() => {
          document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; 
};

export default SparkleTrail;