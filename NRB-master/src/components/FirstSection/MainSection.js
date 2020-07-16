import React from 'react';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';
import './MainSection.css';
import logo from '../../img/Logo1.png';

const MainSection = () => {
  return (
    <div className="section1">
      <img src={logo} />
      <Navbar />
      <div className="about">
        <h1>
          Комплексный <br />
          консалтинг
        </h1>
        <p>Мы поможем Вашему бизнесу достичь успеха!</p>
        <button className="btn">Получить консультацию</button>
      </div>

      <SocialIcons />
    </div>
  );
};

export default MainSection;
