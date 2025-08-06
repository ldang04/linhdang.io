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
                    I'm an undergrad at Columbia passionate about building and scaling startups. I current lead Growth at Raycaster (YC F24), and was previously an AI/ML fellow at Cornell Tech. In my free time, I love <a href="https://devpost.com/dangdiemlinh04" target="_blank" rel="noopener noreferrer">hacking</a>, <a href="https://www.youtube.com/@linhxeffect" target="_blank" rel="noopener noreferrer">making videos</a>, and poring over postmodern fiction.
                    </p>
                </div>
            </div>
        </CSSTransition>
    )
}

export default About;