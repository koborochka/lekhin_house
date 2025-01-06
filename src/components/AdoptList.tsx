import IPet from '../interfaces/IPet';
import PetCardBrief from './PetCardBrief';
import { useState } from 'react';
import { usePet } from '../context/PetContext';
import { useNavigate } from 'react-router-dom';
import {FilterList} from './FilterList';


export type PetFilter = {
	type: 'cat' | 'dog' | 'all',
	age: {
		underOne: boolean,
		oneToFive: boolean,
		fiveToTen: boolean,
		overTen: boolean,
	}
	gender:{
		male: boolean,
        female: boolean,
	}
};

export const AdoptList: React.FC = () => {
	const { pets, isLoading } = usePet();
	const [activeFilters, setActiveFilters] = useState<PetFilter>({ 
		type: 'all',
		 age:{
			underOne: false,
			oneToFive: false,
			fiveToTen: false,
			overTen: false,
		},
		gender:{
			male: false,
			female: false,
		}
})

	const navigate = useNavigate();

	const handlePetClick = (pet: IPet) => {
		navigate(`/adopt/${pet.id}`);
	};

	const filteredPets = pets.filter(pet => {
		const birthDate = new Date(pet.birthdate);
		const now = new Date();

		let years = now.getFullYear() - birthDate.getFullYear();
		let months = now.getMonth() - birthDate.getMonth();
		let days = now.getDate() - birthDate.getDate();
	
		if (months < 0 || (months === 0 && days < 0)) {
			years -= 1;
		}
	
		const typeMatches = activeFilters.type === 'all' || pet.type === activeFilters.type;
	
		const allAgeFiltersFalse = Object.values(activeFilters.age).every(value => !value);
		const allGenderFiltersFalse = Object.values(activeFilters.gender).every(value => !value);
	
		const genderMatches = allGenderFiltersFalse || 
			(activeFilters.gender.male && pet.gender === 'male') ||
			(activeFilters.gender.female && pet.gender === 'female');
		
		const ageMatches = allAgeFiltersFalse ||
			(activeFilters.age.underOne && years < 1) || 
			(activeFilters.age.oneToFive && years >= 1 && years <= 5) ||
			(activeFilters.age.fiveToTen && years > 5 && years <= 10) ||
			(activeFilters.age.overTen && years > 10);
	
		return typeMatches && ageMatches && genderMatches;
	});
	



	return (
		<section className="pets-section wrap">
			{isLoading ? <div className='pets-section__load'>Загрузка...</div> :
				<>
					<FilterList {...{ activeFilters, setActiveFilters }} />
					{filteredPets.length > 0 ? 
					<ul className="pets-section__pets-list">
						{filteredPets?.map(pet => (
							<li className="pets-section__pet-item" key={pet.id} onClick={() => handlePetClick(pet)}>
								<PetCardBrief petItem={pet} />
							</li>
						))}
					</ul>
					: <div className='pets-section__empty-pets'>По указанным фильтрам питомцев в данный момент нет.</div>}
				</>}
		</section>
	);
};