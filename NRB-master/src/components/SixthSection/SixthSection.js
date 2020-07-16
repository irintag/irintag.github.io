import React from 'react';
import './SixthSection.css';
import pic from '../../img/Rectangle 14.png';

const SixthSection = () => {
  return (
    <div className="section6">
      <div>
        <div className="left">
          <h2>Получите консультацию</h2>
          <div className="underline"></div>
          <p className="aboutCompany">
            Это текст о компании. Он необходим для дальнейшего продвижения
            Вашего сайта. Вам будет необходимо предоставить.
          </p>
          <div className="inputs">
            <div className="inputsRow">
              <div className="form">
                <label>Ваше имя</label>
                <input placeholder="Иван Иванов" />
                <div className="inputUnderLine"></div>
              </div>
              <div className="form">
                <label>Ваш телефон</label>
                <input placeholder="+7 ()" />
                <div className="inputUnderLine"></div>
              </div>
            </div>
            <div className="inputsRow">
              <div className="form">
                <label>Ваш email</label>
                <input placeholder="email@email.com" />
                <div className="inputUnderLine"></div>
              </div>
              <div className="form">
                <label>Ваш комментарий</label>
                <input placeholder="(необязательно)" />
                <div className="inputUnderLine"></div>
              </div>
            </div>
            <div className="formConfirmation">
              <button className="sendButton">Отправить</button>
              <p className="agreement">
                Нажимая кнопку "Отправить" я даю своё согласие на <br />
                обработку моих персональных данных
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
