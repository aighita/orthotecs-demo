import React, { Component } from 'react';

import NavBar from "./components/common/NavBar.jsx";
import Footer from './components/common/Footer.jsx';

import LandingPage from './pages/LandingPage.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LandingPage />
                {/* <h1>OrthoTecs Demo</h1> */}
                <Footer />
            </div>
        );
    }
}
export default App;