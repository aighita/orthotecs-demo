import React from "react";
import "../styles/Clients.scss";

const Clients = () => {
    return (
        <div className="clients-container">
            <div className="clients-header">
                <h3>UNSERE KUNDEN</h3>
                <h1>Our satisfied clients</h1>
            </div>
            <div className="clients-logos">
                <img src="/assets/images/client1.png" alt="Client 1" />
                <img src="/assets/images/client2.png" alt="Client 2" />
                <img src="/assets/images/client3.png" alt="Client 3" />
                <img src="/assets/images/client4.png" alt="Client 4" />
            </div>
        </div>
    );
};

export default Clients;