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
                    2025
                </h2>
                <ul>
                     <li>
                        <a href="https://www.raycaster.ai" target="_blank" rel="noopener noreferrer">raycaster.ai</a>

                        // enterprise ai for life science providers.
                    </li>
                     <li>
                        <a href="https://www.connectwith.solar/" target="_blank" rel="noopener noreferrer">Solar</a>

                        // digital handshakes.
                    </li>
                  
                    <li>
                        <a href="https://devpost.com/software/genmd" target="_blank" rel="noopener noreferrer">GenMD</a>

                        // your ai-powered healthcare navigator!
                    </li>
                </ul>
                <h2>
                    2024
                </h2>
                {/* 2024 Project list  */}
                <ul>
                    <li>
                        <a href="https://www.columbiadivhacks.org/" target="_blank" rel="noopener noreferrer">columbiadivhacks.org</a>

                        // empowering diversity in tech. 
                    </li>

                    <li>
                        <a href="https://devpost.com/software/futon" target="_blank" rel="noopener noreferrer">Futon</a>

                        // visiting colleges? grab a futon. 
                    </li>

                    <li>
                        <a href="https://devpost.com/software/welly-up9sir" target="_blank" rel="noopener noreferrer">Welly</a>

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
