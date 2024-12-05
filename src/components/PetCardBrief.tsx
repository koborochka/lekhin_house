import IPet from "../interfaces/IPet";
import { formatAge } from "../utils/utils";

import { ClipLoader } from 'react-spinners';


import { useState } from "react";

const PetCardBrief: React.FC<{
	petItem: IPet;
}> = ({ petItem }) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			{isLoading && (
				<div
				style={{
				  display: 'flex',
				  justifyContent: 'center',
				  alignItems: 'center',
				  height: '100%',
				}}
			  >
				<ClipLoader loading={isLoading} size={40} color="gray" />
			  </div>
			)}
			<img
				className={`pets-section__pet-img`}
				src={petItem.images_url[0]?.secure_url || ''}
				alt={petItem.name || 'Pet image'}
				onLoad={() => setIsLoading(false)}
				onError={(e) => {
					e.currentTarget.src =
						petItem.type === 'cat'
							? 'src/assets/imgs/placeholder--cat.png'
							: 'src/assets/imgs/placeholder--dog.png';
					setIsLoading(false); 
				}}
			/>

			<div className="pets-section__pet-info-cont">
				<div className="pets-section__pet-name-age-cont">
					<p className="pets-section__pet-name">{petItem.name}</p>
					<p className="pets-section__pet-age">{formatAge(petItem.birthdate)}</p>
				</div>
				<img
					className="pets-section__pet-gender"
					src={petItem.gender === "male" ? "src/assets/icons/male-icon.svg" : "src/assets/icons/female-icon.svg"}
					alt=""
				/>
			</div>
			<p className="pets-section__pet-description">
				{petItem.description}
			</p>
		</>
	);
};

export default PetCardBrief;