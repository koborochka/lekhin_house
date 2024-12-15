import { Checkbox } from "@mui/joy";
import { PetFilter } from "./AdoptList";

export default function GenderFilter({ activeFilters, setActiveFilters }:{
	activeFilters: PetFilter;
	setActiveFilters: React.Dispatch<React.SetStateAction<PetFilter>>;
}) {
	const handleChange = (filter : "male" | "female") => {
		setActiveFilters((prev) => ({
			...prev,
			gender: {
				...prev.gender,
				[filter]: !prev.gender[filter],
			},
		}));
	};
	return (
		<div className="filter-item-cont">
			<span className="filter-title">Пол</span>
			<ul className="age-filter-items-container">
				<li className="age-filter-item">
					<Checkbox
						checked={activeFilters.gender.male}
						onChange={() => handleChange("male")}
						label="Мальчики"
						variant="outlined"
						color="primary"
					/>
				</li>
				<li className="age-filter-item">
					<Checkbox
						checked={activeFilters.gender.female}
						onChange={() => handleChange("female")}
						label="Девочки"
						variant="outlined"
						color="primary"
					/>
				</li>
			</ul>
		</div>
	)
}
