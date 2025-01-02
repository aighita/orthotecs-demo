import React from 'react';
import   '../../styles/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h1>ORTHOTECS</h1>
                    <p>Leading the Way in Orthotics <br></br> Excellence <br></br> Care for the quality of life.</p> 
                </div>
                <div className="footer-section">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contacts</h3>
                    <ul>
                        <li>Call us at: <a href="tel:+1234567890">+1 234 567 890</a></li>
                        <li>Mail: <a href="mailto:carlosfufa@orthotecs.de">carlosfufa@orthotecs.de</a></li>
                        <li>Address: <a href="https://www.google.com/maps">0123 Some place, Germany</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Become a customer</h3>
                    <form className="footer-form">
                        <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                        <button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>

            </div>
            <div className="footer-lower">
                <hr />
                <p>© 2024 OrthoTecs - All Rights Reserved<br />Powered by Iulian Ghita & Vlad Voicu</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;