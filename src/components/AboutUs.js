import React from 'react';
import "../styles/components/AboutUs.css";

const AboutUs = ({ className }) => {
    return (
        <div className={`about-us-container ${className}`}>
            <div className="about-us">
                <h2>About Us</h2>
                <p>At Kyptronix, we are dedicated to pushing the boundaries of technology innovation. Our team of experts is committed to delivering cutting-edge solutions that empower individuals and businesses worldwide. With a focus on quality, reliability, and user experience, we strive to make a positive impact in the world of technology.</p>
            </div>
        </div>
    );
};

export default AboutUs;
