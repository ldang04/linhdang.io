import React, {useState, useEffect, Fragment} from 'react'; 
import '../App.css'; 

const Menu = ({options, current, updateCurrent}) => {

    return (
        <div className="menu-container break-hide">
            <div className="button-container">
                {options.map((option, index) => (
                    <button
                        className="menu-btn"
                        key={index}
                        onClick={() => updateCurrent(option)}
                        style={{ fontSize: current === option ? '5.25em' : '3.5em' }} // Corrected style attribute
                    >
                        {option}
                    </button>
                ))}
            </div>

            <p className="barcode-text">Boston / Saigon / NYC</p>
        </div>
    )
}

export default Menu; 