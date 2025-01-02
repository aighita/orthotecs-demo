import React from 'react';

import HeroSection from "../components/HeroSection.jsx"
// import Clients from "../components/Clients.jsx"
import Vendors from '../components/Vendors.jsx';


const LandingPage = () => {
    return (
        <div id="landing-page">
            <HeroSection />
            <Vendors />
            {/* TODO: Add remaining components */}
        </div>
    );
};

export default LandingPage;
