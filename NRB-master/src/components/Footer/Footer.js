import React from 'react';
import './Footer.css';
import logo from '../../img/logoFooter.png';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="" />
        <h6>
          Мы помогаем сформировать цели и спланировать пути их достижения!
        </h6>
      </div>
      <hr />
      <p>© Разработано в ABC DESIGN - создание сайтов в Астане</p>
    </div>
  );
};

export default Footer;
