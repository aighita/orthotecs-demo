import React, { useContext } from "react";
import NavBar from "./components/common/NavBar.jsx";
import Footer from './components/common/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import { AuthContext } from './contexts/AuthContext'; // Import AuthContext

const App = () => {
    const { isAuthorized } = useContext(AuthContext); // Use AuthContext

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
