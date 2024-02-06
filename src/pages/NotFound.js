import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="not-found">
            <NavBar />
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            {/* Additional content for the 404 page */}
            <Footer />
        </div>
    );
};

export default NotFound;
