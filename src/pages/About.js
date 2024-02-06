import React from 'react';
import NavBar from '../components/NavBar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="about">
            <NavBar />
            <AboutUs />
            {/* Additional content for the about page */}
            <Footer />
        </div>
    );
};

export default About;
