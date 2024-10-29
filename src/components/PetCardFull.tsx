import { usePet } from "../context/PetContext";

const PetCardFull: React.FC = () => {
    const { selectedPet } = usePet(); // Получаем питомца из контекста

    if (!selectedPet) {
        return <div>Питомец не найден.</div>;
    }

    return (
        <section className="pet-card-section wrap">
            <nav className="breadcrumb" aria-label="breadcrumb">
                <ol className="breadcrumb__list">
                    <li className="breadcrumb__item"><a href="/">Главная</a></li>
                    <li className="breadcrumb__item"><a href="/adopt">Взять питомца</a></li>
                    <li className="breadcrumb__item" aria-current="page">{selectedPet.name}</li>
                </ol>
            </nav>

            <div className="pet-card">
                <div className="pet-card__description">
                    <p className="pet-card__name">{selectedPet.name}</p>
                    <ul className="pet-card__info">
                        <li className="pet-card__info-item">
                            <p className="pet-card__info-title">Порода</p>
                            <p className="pet-card__info-value" id="pet-card__breed">{selectedPet.breed}</p>
                        </li>
                        <li className="pet-card__info-item">
                            <p className="pet-card__info-title">Пол</p>
                            <p className="pet-card__info-value" id="pet-card__gender">{selectedPet.gender==="male" ? "Мужской" : "Женский"}</p>
                        </li>
                        <li className="pet-card__info-item">
                            <p className="pet-card__info-title">Возраст</p>
                            <p className="pet-card__info-value" id="pet-card__age">{selectedPet.age}</p>
                        </li>
                    </ul>
                    <button className="pet-card__shelter-button btn--blue btn">Приютить</button>
                </div>
                <div className="pet-card__gallery">
                    <img className="pet-card__main-photo" src={selectedPet.images_url[0]} alt={selectedPet.name} />
                    <ul className="pet-card__slider">
                        <li className="pet-card__slider-item"><a href=""><img src={selectedPet.images_url[0]} alt={selectedPet.name} /></a></li>
                        <li className="pet-card__slider-item"><a href=""><img src={selectedPet.images_url[0]} alt={selectedPet.name} /></a></li>
                        <li className="pet-card__slider-item"><a href=""><img src={selectedPet.images_url[0]} alt={selectedPet.name} /></a></li>
                    </ul> 
                    {/* по адекватному сделать надо */}
                </div>
            </div>

            <div className="more-info">
                <div className="more-info__help">
                    <h2 className="more-info__title more-info__help-title">Как помочь?</h2>
                    <div className="more-info__buttons-cont">
                        <button className="more-info__button more-info__button--shelter btn--white btn">Приютить</button>
                        <button className="more-info__button more-info__button--donation btn--white btn">Отправить пожертвование</button>
                        <button className="more-info__button more-info__button--share btn--white btn">Поделиться историей питомца</button>
                    </div>
                </div>
                <div className="more-info__about-pet">
                    <h2 className="more-info__title more-info__about-pet-title">Обо мне</h2>
                    <div className="more-info__text-cont">
                        {/* {selectedPet.about.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))} */}
                        <p>{selectedPet.about}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PetCardFull;