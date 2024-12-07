import { useState } from "react";
import { ClipLoader } from "react-spinners";
import IPet from "../interfaces/IPet";
import { formatAge } from "../utils/utils";

const PetCardBrief: React.FC<{ petItem: IPet }> = ({ petItem }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [imgSrc, setImgSrc] = useState(petItem.images_url[0]?.secure_url || "");

	const handleImageError = () => {
		setImgSrc(
			petItem.type === "cat"
				? "/src/assets/imgs/placeholder--cat.png"
				: "/src/assets/imgs/placeholder--dog.png"
		);
		setIsLoading(false)
	};

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	return (
		<div className="pets-section__pet-card">
			{isLoading && (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "280px",
					}}
				>
					<ClipLoader loading={isLoading} size={40} color="gray" />
				</div>
			)}
			<img
				className="pets-section__pet-img"
				src={imgSrc}
				alt={petItem.name || "Pet image"}
				onLoad={handleImageLoad}
				onError={handleImageError}
				style={{ display: isLoading ? "none" : "block" }} 
			/>
			<div className="pets-section__pet-info-cont">
				<div className="pets-section__pet-name-age-cont">
					<p className="pets-section__pet-name">{petItem.name}</p>
					<p className="pets-section__pet-age">{formatAge(petItem.birthdate)}</p>
				</div>
				<img
					className="pets-section__pet-gender"
					src={
						petItem.gender === "male"
							? "/src/assets/icons/male-icon.svg"
							: "/src/assets/icons/female-icon.svg"
					}
					alt=""
				/>
			</div>
			<p className="pets-section__pet-description">{petItem.description}</p>
		</div>
	);
};

export default PetCardBrief;
