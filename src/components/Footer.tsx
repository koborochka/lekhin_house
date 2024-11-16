import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer container">
      <div className="footer-cont wrap">
        <a className="footer-cont__logo-cont" href="/">
            <img
              className="footer-cont__logo-img"
              src="src/assets/icons/logo.svg"
              alt="logo"
            />
            <div>
              <p className="footer-cont__logo-name">Милый друг</p>
              <p className="footer-cont__logo-description">приют для животных</p>
            </div>
        </a>

        <p className="footer-cont__shelter-desc">
          Приют «Милый Друг» более трёх лет спасает, выхаживает и пристраивает
          бездомных собак. Ваше участие поможет нам и дальше помогать
          животным!
        </p>
        <div className="footer-cont__social-media-cont">
          <a className="footer-cont__social-media-item" href="#">
            <img src="/src/assets/icons/vk-icon.svg" alt="vk" />
          </a>
          <a className="footer-cont__social-media-item" href="#">
            <img src="/src/assets/icons/tg-icon.svg" alt="tg" />
          </a>
          <a className="footer-cont__social-media-item" href="#">
            <img src="/src/assets/icons/insta-icon.svg" alt="insta" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;