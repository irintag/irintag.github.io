import React from 'react';
import logo from '../../img/Logo4Section.png';
import './FourthSection.css';

const FourthSection = () => {
  return (
    <div className="section4 ">
      <h1>Наши преимущества</h1>
      <div className="underline"></div>
      <div className="gridSectionFour">
        <div className="gridItemSectionFour">
          <img alt="" src={logo} />
          <div>
            <h4>Широкий опыт</h4>
            <p>
              Мы имеем уникальный опыт
              <br /> в целом ряде отраслей
            </p>
          </div>
        </div>
        <div className="gridItemSectionFour">
          <img alt="" src={logo} />
          <div>
            <h4>Надежность</h4>
            <p>
              Мы берем ответственность <br />
              за результат нашей работы
            </p>
          </div>
        </div>
        <div className="gridItemSectionFour">
          <img alt="" src={logo} />
          <div>
            <h4>Гибкость</h4>
            <p>
              Наша команда всегда <br />
              открыта для новых идей
            </p>
          </div>
        </div>
        <div className="gridItemSectionFour">
          <img alt="" src={logo} />
          <div>
            <h4>Экспертность</h4>
            <p>
              Мы реализовали более 1000 <br />
              успешных проектов
            </p>
          </div>
        </div>
        <div className="gridItemSectionFour">
          <img alt="" src={logo} />
          <div>
            <h4>Честность</h4>
            <p>
              Интересы клиентов для нас
              <br /> важнее собственной выгоды
            </p>
          </div>
        </div>
        <div className="gridItemSectionFour">
          <img alt="" src={logo} />
          <div>
            <h4>Качество</h4>
            <p>
              Высокое качество – наша <br />
              главная задача
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
