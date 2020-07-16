import React from 'react';
import './FifthSection.css';
import pic1 from '../../img/Rectangle 44.png';
import pic2 from '../../img/Rectangle 47.png';
import pic3 from '../../img/Rectangle43.png';

const FifthSection = () => {
  return (
    <div className="section5">
      <h1>Наши партнеры</h1>
      <div className="underline"></div>
      <div className="teamCards">
        <div className="personCard">
          <img className="image" src={pic3} alt="" />
          <div className="personInfo">
            <p className="name">Танатаров Ж.К.</p>
            <p className="occupation">Адвокат</p>
          </div>
        </div>
        <div className="personCard">
          <img className="image" src={pic1} alt="" />
          <div className="personInfo">
            <p className="name">Келденов Р.К.</p>
            <p className="occupation">Нотариус</p>
          </div>
        </div>
        <div className="personCard">
          <img className="image" src={pic2} alt="" />
          <div className="personInfo">
            <p className="name">Сабитова С.Т.</p>
            <p className="occupation">Бизнес-тренер</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
