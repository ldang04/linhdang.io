import React from 'react'; 
import '../App.css'; 

const Navbar = ({options, current, updateCurrent}) => {
    
    return (
        <div className="navbar">
            <p>
                <b>
                    <i>
                        <a className="text-decoration-none" href="/">LD</a>
                    </i>
                </b>
            </p>

                {options.map((option, index) => (
                    <button
                        className="nav-btn break-show"
                        key={index}
                        onClick={() => updateCurrent(option)} 
                    >
                        {option}
                    </button>
                ))}
        </div>
    )
}

export default Navbar; 