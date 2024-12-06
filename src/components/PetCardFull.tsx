import { useEffect, useState } from "react";
import { usePet } from "../context/PetContext";
import { IoPawSharp } from "react-icons/io5";
import { IoGift } from "react-icons/io5";
import { formatAge } from "../utils/utils";
import { useNavigate, useParams } from "react-router-dom";
import IPet from "../interfaces/IPet";
import PetGallery from "./PetGallery";
import PetCardBrief from "./PetCardBrief";

const PetCardFull: React.FC = () => {
	const { petId } = useParams<{ petId: string }>();
	const [selectedPet, setSelectedPet] = useState<IPet | null>(null);
	const { pets } = usePet();
	const navigate = useNavigate();

	useEffect(() => {
		if (petId) {
			const pet = pets.find((p) => p.id === +petId);
			setSelectedPet(pet || null);
		}
	}, [petId, pets]);

	const handlePetClick = (pet: IPet) => {
		navigate(`/adopt/${pet.id}`);
	};

	if (!selectedPet) {
		return <div>Питомец не найден.</div>;
	}

	return (
		<section className="pet-card-section wrap">
			<nav className="breadcrumb" aria-label="breadcrumb">
				<ol className="breadcrumb__list">
					<li className="breadcrumb__item"><a href="/">Главная</a></li>
					<li className="breadcrumb__item"><a href="/adopt">Подопечные</a></li>
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
							<p className="pet-card__info-value" id="pet-card__gender">{selectedPet.gender === "male" ? "Мужской" : "Женский"}</p>
						</li>
						<li className="pet-card__info-item">
							<p className="pet-card__info-title">Возраст</p>
							<p className="pet-card__info-value" id="pet-card__age">{formatAge(selectedPet.birthdate)}</p>
						</li>
					</ul>
					<button className="pet-card__shelter-button btn--blue btn">Приютить</button>
				</div>

				<PetGallery imagesUrl={selectedPet.images_url} name={selectedPet.name} type={selectedPet.type} />
			</div>

			<div className="more-info">
				<div className="more-info__help">
					<h2 className="more-info__title more-info__help-title">Как помочь?</h2>
					<div className="more-info__buttons-cont">
						<button className="more-info__button more-info__button--shelter btn--white btn"><IoPawSharp size={24} /> Приютить</button>
						<button className="more-info__button more-info__button--donation btn--white btn"><IoGift size={24} />Отправить пожертвование</button>
					</div>
				</div>
				<div className="more-info__about-pet">
					<h2 className="more-info__title more-info__about-pet-title">Обо мне</h2>
					<div className="more-info__text-cont">
						{selectedPet.about.map((paragraph, index) => (
							<p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
						))}
					</div>
				</div>
			</div>

			<div className="other-pets">
				<h2 className="more-info__title">Другие питомцы</h2>
				<ul className="pets-section__pets-list">
					{pets
						?.filter((pet) => pet.id !== selectedPet.id)
						.slice()
						.sort(() => Math.random() - 0.5)
						.map((pet) => (
							<li
								className="pets-section__pet-item"
								key={pet.id}
								onClick={() => handlePetClick(pet)}
							>
								<PetCardBrief petItem={pet} />
							</li>
						))}
				</ul>
			</div>

		</section>
	);
};

export default PetCardFull;
