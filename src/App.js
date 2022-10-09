import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ThirdSection from './components/ThirdSection';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default App;
