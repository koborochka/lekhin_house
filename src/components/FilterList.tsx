import React, { useEffect, useRef, useState } from 'react'
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import AgeFilter from './AgeFilter';
import { PetFilter } from './AdoptList';
import GenderFilter from './GenderFilter';


type FilterListProps = {
	activeFilters: PetFilter;
	setActiveFilters: React.Dispatch<React.SetStateAction<PetFilter>>;
};

export const FilterList: React.FC<FilterListProps> = ({ activeFilters, setActiveFilters }) => {
	const [isFiltersVisible, setFiltersVisible] = useState(false);
	const filterRef = useRef<HTMLDivElement>(null);

	const handleToggleFilters = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget || (e.target as HTMLElement).closest('svg')) {
		  setFiltersVisible(!isFiltersVisible);
		}
	  };
	  


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFiltersVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

	const handleFilterTypeChange = (typeFilter: 'cat' | 'dog' | 'all') => {
		setActiveFilters((prev)=>({ 
			...prev,
			type: typeFilter }))
	};

	return (
		<div className="pets-section__filter-cont">
			<ul className="pets-section__type-filter">
				<li
					className={`pets-section__type-filter-item ${activeFilters.type === 'all' ? 'pets-section__type-filter-item--active' : ''
						}`}
					onClick={() => handleFilterTypeChange('all')}
				>
					Все
				</li>
				<li
					className={`pets-section__type-filter-item ${activeFilters.type === 'cat' ? 'pets-section__type-filter-item--active' : ''
						}`}
					onClick={() => handleFilterTypeChange('cat')}
				>
					Кошки
				</li>
				<li
					className={`pets-section__type-filter-item ${activeFilters.type === 'dog' ? 'pets-section__type-filter-item--active' : ''
						}`}
					onClick={() => handleFilterTypeChange('dog')}
				>
					Собаки
				</li>
			</ul>
			<div ref={filterRef}  className="pets-section__filters-container" onClick={(e)=>handleToggleFilters(e)}>
				Фильтры  {isFiltersVisible ? <GoChevronUp size={25} /> : <GoChevronDown size={25} />} 
				<div className={`filter-container ${isFiltersVisible ? '' : 'hidden'}`}>
					<AgeFilter {...{ activeFilters, setActiveFilters }} />
					<GenderFilter {...{ activeFilters, setActiveFilters }} />
				</div>
			</div>
		</div>
	)
}
