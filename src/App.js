import React, { useContext, useState, useEffect } from "react";
import NavBar from "./components/common/NavBar.jsx";
import Footer from './components/common/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import { AuthContext } from './contexts/AuthContext'; // Import AuthContext

const App = () => {
    const { isAuthorized } = useContext(AuthContext); // Use AuthContext
    const [isMobile, setIsMobile] = useState(false); // State to track mobile devices

    useEffect(() => {
        // Function to detect if the screen width is mobile-sized
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 1000); // Adjust threshold as needed
        };

        // Initial check
        checkScreenSize();

        // Add event listener for screen resizing
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    if (isMobile) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: '#1B3B56',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                <h1>
                    Sorry, your display size is not currently compatible with our website!<br></br>
                    Support for all devices coming soon...
                </h1>
            </div>
        );
    }

    return (
        <div>
            {isAuthorized ? (
                <>
                    <NavBar />
                    <LandingPage />
                    <Footer />
                </>
            ) : (
                <ComingSoon />
            )}
        </div>
    );
};

export default App;
