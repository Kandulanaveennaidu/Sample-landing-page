import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Banner />
            {/* Additional content for the home page */}
            <Footer />
        </div>
    );
};

export default Home;
