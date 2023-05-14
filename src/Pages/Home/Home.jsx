import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './Services/Services';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Services />
            <FAQ />
        </div>
    );
};

export default Home;