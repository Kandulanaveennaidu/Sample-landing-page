import React from 'react';
import "../styles/components/Banner.css";
import "../styles/components/Banner.css";

const Banner = ({ className }) => {
    return (
        <div className={`banner-container ${className}`}>
            <div className="banner"></div>
            <div className="banner-content">
                <h1>Boost Your Ranking With SEO Services.</h1>
                <p className="para">We've Skilled in wide range of digital marketing tools.</p>
            </div>
        </div>
    );
};

export default Banner;
