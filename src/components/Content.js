import React, { useState, useEffect } from 'react'; 
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Resume from './sections/Resume';

import '../App.css'; 

const Content = ({options, current, updateCurrent}) => {
    
    const renderContent = () => {
        switch(current){
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Resume': 
                return <Resume />; 
            case 'Contact': 
                return <Contact />;
            default: 
                return <About />;
        }
    }
    return (
        <div className="content-container">
            {renderContent()}
        </div>
    )
}

export default Content; 