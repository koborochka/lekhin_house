import IPet from '../interfaces/IPet';
import PetCardBrief from './PetCardBrief';
import { useState } from 'react';
import { usePet } from '../context/PetContext';
import { useNavigate } from 'react-router-dom';


type PetFilter = {
	type: 'cat' | 'dog' | 'all'
};

export const AdoptList: React.FC = () => {
	const { pets, isLoading } = usePet();
	const navigate = useNavigate();
	const [activeTypeFilter, setActiveTypeFilter] = useState<PetFilter>({ type: 'all' })

	const handlePetClick = (pet: IPet) => {
		navigate(`/adopt/${pet.id}`);
	};

	const handleFilterTypeChange = (typeFilter: 'cat' | 'dog' | 'all') => {
		setActiveTypeFilter({ type: typeFilter });
	};

	const filteredPets = pets.filter(pet =>
		activeTypeFilter.type === 'all' ? true : pet.type === activeTypeFilter.type
	);


	return (
		<section className="pets-section wrap">
			{isLoading ? <div className='pets-section__load'>Загрузка...</div> :
				<>
					<div className="pets-section__filter-cont">
						<ul className="pets-section__type-filter">
							<li
								className={`pets-section__type-filter-item ${activeTypeFilter.type === 'all' ? 'pets-section__type-filter-item--active' : ''
									}`}
								onClick={() => handleFilterTypeChange('all')}
							>
								Все
							</li>
							<li
								className={`pets-section__type-filter-item ${activeTypeFilter.type === 'cat' ? 'pets-section__type-filter-item--active' : ''
									}`}
								onClick={() => handleFilterTypeChange('cat')}
							>
								Кошки
							</li>
							<li
								className={`pets-section__type-filter-item ${activeTypeFilter.type === 'dog' ? 'pets-section__type-filter-item--active' : ''
									}`}
								onClick={() => handleFilterTypeChange('dog')}
							>
								Собаки
							</li>
						</ul>
						<div className="pets-section__filter-button">Фильтры</div>
					</div>
					<ul className="pets-section__pets-list">
						{filteredPets?.map(pet => (
							<li className="pets-section__pet-item" key={pet.id} onClick={() => handlePetClick(pet)}>
								<PetCardBrief petItem={pet} />
							</li>
						))}
					</ul>
				</>}
		</section>
	);
};