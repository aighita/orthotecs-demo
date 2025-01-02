import React from 'react';

import HeroSection from "../components/HeroSection.jsx"
import Clients from "../components/Clients.jsx"
import Vendors from '../components/Vendors.jsx';
import Contact from '../components/Contact.jsx';
const LandingPage = () => {
    return (
        <div id="landing-page">
            <HeroSection />
            <Vendors />
            <Contact/>
            <Clients/>
            {/* TODO: Add remaining components */}
        </div>
    );
};

export default LandingPage;
