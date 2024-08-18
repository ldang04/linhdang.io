import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../App.css'; 

const Resume = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); 
  }, []);

    return (
        <CSSTransition in={show} timeout={1000} classNames="fade-slide" unmountOnExit>
            <div className="resume-container">
                <div className="polaroid-container">
                    <img className="grid" src="/assets/images/Grid.svg" alt="Grid Background" />
                    <div className="polaroids">
                        <img src="/assets/images/polaroid1.png" className="polaroid polaroid1" alt="Polaroid 1" />
                        <img src="/assets/images/polaroid2.png" className="polaroid polaroid2" alt="Polaroid 2" />
                        <img src="/assets/images/polaroid3.png" className="polaroid polaroid3" alt="Polaroid 3" />
                    </div>
                    <p>You can find my detailed resume <a href="https://docs.google.com/document/d/1skdxXlAGNm5yGmMDdG8loVhrRDKCJuhb/edit?usp=sharing&ouid=117939066772908887385&rtpof=true&sd=true">here</a>.</p>
                </div>
            </div>
    </CSSTransition>
    )
}

export default Resume; 