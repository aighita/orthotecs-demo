import React from 'react';
import "../../styles/NavBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <div id="nav-bar">
            {/* Logo, Search Bar, and Login Section */}
            <div className='logo-search-login'>
                <div className="container-logo-search-login">
                    <a href="" className="logo">
                        <img
                            // TODO: Change to public URL env variable
                            // src="../../../public/assets/images/logo.png"
                            src='/assets/images/logo.png'
                            alt="logo"
                        />
                        <div>
                            <h1>Ortho</h1><h1 className='h1-orange'>tecs</h1>
                        </div>
                    </a>

                    <form>
                        <input 
                            type="text"
                            placeholder="Search key or product"
                            className="search-input"
                        />
                        <button type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>

                    <div className="log-in">
                        <img className="icon" src="/assets/images/login.png" alt="icon"></img>
                        <div className="anchors">
                            <a href="" className='login'>Log In</a>
                            <a href="" className='signup'>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Links and Contact Section */}
            <div className="links-contact">
                <div className="container-links-contact">
                    <ul className="links-bar">
                        <li><a href="">Home</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">Clients</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <button>Contact Us</button>
                </div>
            </div>

            {/* Products Section */}
            <div className="products">
                    <a href="">Orthotics</a>
                    <a href="">Bandages</a>
                    <a href="">Compression</a>
                    <a href="">Prosthetics</a>
            </div>
        </div>
    );
};

export default NavBar;
