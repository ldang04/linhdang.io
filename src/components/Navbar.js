import React from 'react'; 
import '../App.css'; 

const Navbar = ({options, current, updateCurrent}) => {
    
    return (
        <div className="navbar">
            <p>
                <b>
                    <i>
                        <a className="text-decoration-none" id="ld-logo" href="/">LD</a>
                    </i>
                </b>
            </p>

                {options.map((option, index) => (
                    <button
                        className="nav-btn break-show"
                        key={index}
                        onClick={() => updateCurrent(option)} 
                        style={{ fontSize: current === option ? '5.25em' : '3.5em' }}
                    >
                        {option}
                    </button>
                ))}
        </div>
    )
}

export default Navbar; 