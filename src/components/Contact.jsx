import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/assets/images/contact-us-background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: "-1",
                height: "90vh", // Adjust as needed
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className="contact-container">
                <div className="contact-banner">
                    <h2>Contact us</h2>
                    <p>
                        Either you want to become a distributor/vendor or<br></br>client/partner, complete the form, and we will get<br></br>back to you as soon as possible to discuss more.
                    </p>
                </div>
                <div className="contact-form">
                    <form>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" rows="10" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;