import logo from '../assets/icons/logo.svg';
import dogImage from '../assets/imgs/hero-bg--dog.png';
import catImage from '../assets/imgs/hero-bg--cat.png';
import { IoPawSharp } from 'react-icons/io5';
import { GoHeartFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import WaysToHelp from '../components/WaysToHelp';
import { usePet } from '../context/PetContext';
import AdoptListBrief from '../components/AdoptListBrief';

export default function MainPage() {
	const { pets }  = usePet()

    const navigate = useNavigate(); 

	const handleHowToAdoptClick = () => {
		navigate('/how-to-adopt');
	}

  return (
    <>
      <section className="hero">
        <div className="hero__img-cont hero__img-cont--left">
          <img alt="собака" className="hero__img hero__img--dog" src={dogImage} />
        </div>
        <div className="hero__content">
          <h1 className="hero__title title-h1">
            Давайте вместе <br /> сделаем жизнь десятков животных <br /> лучше и дадим им шанс <br />
            <span className="pink">обрести семью</span>
          </h1>
            <button className="hero__find-pet-butt btn--blue btn" onClick={()=>{navigate('/adopt')}}>Найти питомца</button>
        </div>
        <div className="hero__img-cont hero__img-cont--right">
          <img className="hero__img hero__img--cat" src={catImage} alt="кошка" />
        </div>
      </section>

      <section className="about-shelter wrap">
        <div className="our-shelter">
          <header className="our-shelter__header">
            <img className="our-shelter__logo-img" src={logo} alt="logo" />
            <h2 className="our-shelter__title">Наш приют</h2>
          </header>
          <p>Мы помогаем бездомным животным по принципу: «Помогая не навреди!»</p>
          <p>
            Дoлгoe вpeмя фонд приют пoлный кoмплeкc ycлyг пo пoдгoтoвкe вpeмeннo бeздoмныx кoшeк и coбaк для
            пpoживaния в дoмaшниx ycлoвияx: oт лeчeния и cтepилизaции дo кинoлoгичecкoй paбoты пo aдaптaции к
            нoвым ycлoвиям жизни и в дaльнeйшeм пpиcтpoй.
          </p>
        </div>
        <div className="our-mission">
          <h2 className="our-mission__title">Наша миссия</h2>
          <ul className="our-mission__missions-list">
            <li className="our-mission__mission">
                <IoPawSharp color='#4796F3'/> 
                <p>Сокращение численности безнадзорных животных и изменение отношения общества к ним</p>
            </li>
            <li className="our-mission__mission">
                <GoHeartFill color="#4796F3" />
                <p>Популяризация ответственного отношения к домашним животным</p>
            </li>
          </ul>
        </div>
      </section>

	  <AdoptListBrief />

	  <WaysToHelp />

      <section className="adopt-steps wrap">
        <h2 className="adopt-steps__title title-h2">
          Как <span className="pink">взять питомца</span> из приюта
        </h2>
        <ul className="adopt-steps__steps">
          <li className="adopt-steps__step adopt-steps__step--1" onClick={handleHowToAdoptClick}>
            <div className="adopt-steps__step-number"></div>
            <p>Заполнить анкету кандидата усыновителя</p>
          </li>
          <li className="adopt-steps__step adopt-steps__step--2" onClick={handleHowToAdoptClick}>
            <div className="adopt-steps__step-number"></div>
            <p>Встретиться с сотрудниками приюта</p>
          </li>
          <li className="adopt-steps__step adopt-steps__step--3" onClick={handleHowToAdoptClick}>
            <div className="adopt-steps__step-number"></div>
            <p>Забрать питомца</p>
          </li>
        </ul>
      </section>
    </>
  );
}
