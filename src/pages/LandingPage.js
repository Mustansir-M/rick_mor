import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/list');
  };

    
    return (
        
        <div className="overlay">
            <div className="home">
                {/* <h1 className="primary-title">Rick and Morty!</h1> */}
                <button className="primary-button" onClick={handleClick}>
                    All characters &#129094;
                </button>
            </div>
            
        </div>
        
    )
}

export default LandingPage