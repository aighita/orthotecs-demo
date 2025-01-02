import React, { createContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const authorized = localStorage.getItem("authorized") === "true";
        setIsAuthorized(authorized);
    }, []);

    const authorizeUser = (password) => {
        if (password === "22772020") {
            localStorage.setItem("authorized", "true");
            setIsAuthorized(true);
        } else {
            alert("Invalid password!");
        }
    };

    const logoutUser = () => {
        localStorage.removeItem("authorized");
        setIsAuthorized(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthorized, authorizeUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
