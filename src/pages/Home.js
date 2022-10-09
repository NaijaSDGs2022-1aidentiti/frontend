import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ThirdSection from '../components/ThirdSection';

const Home = () => {
    return (
        <div>
            <div className="App">
            <Header />
            <SubHeader />
            <ThirdSection />
            <Footer />
            </div>
        </div>
    );
};

export default Home;