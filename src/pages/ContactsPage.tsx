
export default function ContactsPage() {
  return (
    <section className="contacts wrap">
      <h2 className="title-h1">
        Наши <span className="pink">контакты</span>
      </h2>
      <ul className="contacts__info">
        <li className="contacts__item">
          <span className="contacts__label">Телефон</span>
          <span className="contacts__value">+7 (927) 009 36 40</span>
        </li>
        <li className="contacts__item">
          <span className="contacts__label">Почта</span>
          <span className="contacts__value">m-drug63@yandex.u</span>
        </li>
        <li className="contacts__item">
          <span className="contacts__label">Город</span>
          <span className="contacts__value">
            196247, Россия, Екатеринбург, ул. <br /> Автовская, д. 31
          </span>
        </li>
        <li className="contacts__item">
          <span className="contacts__label">Наши соцсети</span>
          <div className="contacts__socials">
            <a href="#" className="contacts__social-link">
              <img src="src/assets/icons/vk-icon.svg" alt="ВКонтакте" />
            </a>
            <a href="#" className="contacts__social-link">
              <img src="src/assets/icons/tg-icon.svg" alt="Telegram" />
            </a>
            <a href="#" className="contacts__social-link">
              <img src="src/assets/icons/insta-icon.svg" alt="Instagram" />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}