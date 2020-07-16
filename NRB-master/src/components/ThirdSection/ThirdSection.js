import React from 'react';
import icon from '../../img/XMLID 888 (1).png';
import './Thirdection.css';
import vector from '../../img/Vector 14.png';

const ThridSection = () => {
  return (
    <div className="container">
      <h1>Наши услуги</h1>
      <div className="underlineSectionThree"></div>
      <div className="gridSectionThree">
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>
            Бесплатные консультации <br />
            во всех областях права
          </strong>

          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Уголовное право и процесс</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>
            Консалтинг и аутсорсинг <br />
            управления пректами{' '}
          </strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Трудовое право</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Интеллектуальное право</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Гражданское право и процесс</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Нотариальные услуги </strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Спичрайтинг</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Корпоративное право</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Иммиграционное право</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Административное право и процесс</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Коллекторские услуги </strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Налоговое право</strong>
          <img className="vector" src={vector} alt="" />
        </div>
        <div className="gridItemSectionThree">
          <img className="logo" alt="" src={icon} />
          <strong>Договорное прво</strong>
          <img className="vector" src={vector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThridSection;
