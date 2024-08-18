import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../App.css'; 

const Contact = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); 
      }, []);

    return (
        <CSSTransition in={show} timeout={1000} classNames="fade-slide" unmountOnExit>
            <div className="contact-container">
                <div>
                    <h1>Let's connect!</h1>
                    <p>Email: dd3212 [at] columbia [dot] edu</p>

                    <p>
                        Platforms: <a href="https://www.linkedin.com/in/diem-linh-dang-3b7229213/">LinkedIn</a> / <a href="https://github.com/ldang04">GitHub</a>
                    </p>
                </div>
        </div>
        </CSSTransition>
    )
}

export default Contact;