import React from 'react';
import './App.css';
import MainSection from './components/FirstSection/MainSection.js';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection.js/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
};

export default App;
