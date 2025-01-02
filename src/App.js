import React, { Component } from 'react';

import NavBar from "./components/common/NavBar.jsx";

import LandingPage from './pages/LandingPage.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LandingPage />
                {/* <h1>OrthoTecs Demo</h1> */}
            </div>
        );
    }
}
export default App;