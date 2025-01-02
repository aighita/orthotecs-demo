import React from 'react';
import "../styles/HeroSection.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return (
        <div id="hero-section">
            <div className="content-container">
                <div className='motto-action-button'>
                    <h3>CARING FOR LIFE</h3>
                    <h1>We make orthotics <br></br> accessible</h1>
                    <button>Become a partner</button>
                </div>

                <div className='become-a-customer'>
                    <h3>Become a customer</h3>
                    <form>
                        <input 
                            type="text"
                            placeholder="Enter your email address"
                            className="email-input"
                        />
                        <button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
