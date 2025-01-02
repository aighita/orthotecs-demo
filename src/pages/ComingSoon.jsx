import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Import AuthContext
import '../styles/ComingSoon.scss';

const ComingSoon = () => {
    const { isAuthorized, authorizeUser } = useContext(AuthContext); // Use AuthContext
    const [password, setPassword] = useState(""); // State to hold input value

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        authorizeUser(password); // Call authorizeUser with entered password
    };

    return (
        <div id="coming-soon">
            {/* Video Background */}
            <video
                className="coming-soon-video-background"
                autoPlay
                muted
                loop
                aria-label="Background video"
            >
                <source
                    src="/assets/videos/coming-soon-background-video.mp4"
                    type="video/webm"
                />
                Your browser does not support the video tag.
            </video>

            <div className="coming-soon-container">
                <h1 className="coming-soon-h1">COMING SOON</h1>
            </div>

            {/* Password Input Box */}
            {!isAuthorized && (
                <form className="password-box" onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update state
                    />
                </form>
            )}

            {isAuthorized && (
                <div className="welcome-message">
                    <h2>Welcome to the Platform!</h2>
                </div>
            )}

            <footer>
                &copy; 2025 ORTHOTECS - All rights reserved
            </footer>
        </div>
    );
};

export default ComingSoon;
