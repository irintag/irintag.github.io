import React from 'react';
import './SeventhSection.css';
import map from '../../img/map.png';

const SeventhSection = () => {
  return (
    <div className="section7">
      <div>
        <img className="map" src={map} alt="" />
        <div className="card">
          <h1>Контакты</h1>
          <div className="underline"></div>
          <h5> NRB Consulting Group</h5>
          <p className="about-company">
            Это текст о компании. Он необходим для <br />
            дальнейшего продвижения Вашего сайта. Вам
            <br /> будет необходимо предоставить
          </p>
          <p className="address">
            <i className="fas fa-map-marker-alt" />
            Нур-Султан, ул. Ж.Нажимеденова 20
          </p>
          <p className="phone">
            <i className="fas fa-phone-alt" />
            +7 (7172) 25-20-60 / +7 (708) 425-20-60
          </p>
          <p className="mail">
            <i className="far fa-envelope" />
            info@nrb-consulting.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
