import { useState, useEffect } from 'react'; 
import { CSSTransition } from 'react-transition-group';
import "../../App.css"; 


const About = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); 
      }, []);

    return (
        <CSSTransition in={show} timeout={1000} classNames="fade-slide" unmountOnExit>
            <div className="about-container">
                <div className="headshot-container">
                    <img className="headshot" src="/assets/images/headshot.jpg" />
                </div>

                <h1>Linh Dang</h1>
                
                <div className="about-text">
                    <p>CS + Philosophy @ Columbia</p>

                    <br />

                    <p>
                    I’m an undergrad at Columbia & an AI/ML fellow in Cornell’s Break Through Tech program. With a fascination for tech, startup culture, and ethics, I am passionate about leveraging technology for social good. I also love <a href="https://devpost.com/dangdiemlinh04">hacking</a>, <a href="https://www.youtube.com/@linhxeffect">making videos</a>, and poring over Haruki Murakami's latest novels.
                    </p>
                </div>
            </div>
        </CSSTransition>
    )
}

export default About;