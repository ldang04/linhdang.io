import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../App.css'; 

const Projects = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // Trigger the appearance of the div
      }, []);

    return (
        <CSSTransition in={show} timeout={1000} classNames="fade-slide" unmountOnExit>
            <div className="projects-container">
                <p className="projects-desc">
                    I love transforming my Figma mockups from inklings of ideas into robust applications. Many of my projects have been collaborative works spanning organizations, hackathons, & personal quests with friends. All of them have been made with love ♥
                </p>

                <h2>
                    2024
                </h2>
                {/* 2024 Project list  */}
                <ul>
                    <li>
                        <a href="#">linhdang.io</a>

                        // this website! made from <a href="https://github.com/ldang04/linhdang.io">scratch</a>. 
                    </li>
                    
                    <li>
                        <a href="https://www.columbiadivhacks.org/">columbiadivhacks.org</a>

                        // empowering diversity in tech. 
                    </li>

                    <li>
                        <a href="https://devpost.com/software/futon">Futon</a>

                        // visiting colleges? grab a futon. 
                    </li>

                    <li>
                        <a href="https://devpost.com/software/welly-up9sir">Welly</a>

                        // invest in your mental health!
                    </li>
                </ul>

                <br />

                <h2>
                    &lt;2023
                </h2>

                {/* 2023 Project list */}
                <ul>
                    <li>
                        <a href="https://devpost.com/software/elavo">Elavo</a>

                        // a toilet robot with a public mission.
                    </li>
                    
                    <li>
                        <a href="https://github.com/ldang04/ASK-a-Peer">ASK-a-Peer </a>

                        // academic accessibility @ andover. 
                    </li>
                </ul>
            </div>
        </CSSTransition>
    )
}

export default Projects; 
