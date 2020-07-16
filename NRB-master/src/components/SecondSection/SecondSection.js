import React from 'react';
import image from '../../img/Section2.png';
import './SecondSection.css';

const SecondSection = () => {
  return (
    <div className="section2">
      <div>
        <h2>
          NRB Consulting Group<div className="underline"></div>
        </h2>
        <p>
          NRB Consulting Group объединяет высококвалифицированных специалистов
          широкого профиля, имеющих опыт работы на руководящих должностях в
          органах прокуратуры, финансовой полиции, юстиции и судейском корпусе.
          <br></br>
          Именно поэтому – наши сотрудники владеют уникальным опытом и
          квалификацией, чтобы находить законные решения в запутанных и,
          казалось бы неразрешимых ситуациях.
        </p>
        <div className="experience">
          <div>
            <h4>9</h4>
            <p>
              Профессионалов
              <br /> широкого профиля
            </p>
          </div>
          <div>
            <h4>18 лет</h4>
            <p>
              Средний юридический <br />
              стаж каждого
            </p>
          </div>
          <div>
            <h4>162 лет</h4>
            <p>
              Совокупный стаж <br />
              работы
            </p>
          </div>
        </div>
      </div>

      <img alt="" src={image} />
    </div>
  );
};

export default SecondSection;
