import Checkbox from '@mui/joy/Checkbox';
import { PetFilter } from './AdoptList';

type AgeFilterKey = 'underOne' | 'oneToFive' | 'fiveToTen' | 'overTen';

const ageFilterOptions: { key: AgeFilterKey; label: string }[] = [
	{ key: 'underOne', label: 'до 1 года' },
	{ key: 'oneToFive', label: '1 - 5 лет' },
	{ key: 'fiveToTen', label: '5 - 10 лет' },
	{ key: 'overTen', label: 'от 10 лет' },
];


export default function AgeFilter({ activeFilters, setActiveFilters }:{
		activeFilters: PetFilter;
		setActiveFilters: React.Dispatch<React.SetStateAction<PetFilter>>;
	}) {

	const handleChange = (filter: AgeFilterKey) => {
		setActiveFilters((prev) => ({
			...prev,
			age: {
				...prev.age,
				[filter]: !prev.age[filter],
			},
		}));
	};

	return (
		<div>
			<span className="filter-title">Возраст</span>
			<ul className="age-filter-items-container">
				{ageFilterOptions.map(({ key, label }) => (
					<li className="age-filter-item" key={key}>
						<Checkbox
							checked={activeFilters.age[key]}
							onChange={() => handleChange(key)}
							label={label}
							variant="outlined"
							color="primary"
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
