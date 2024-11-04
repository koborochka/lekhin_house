import IPet from "../interfaces/IPet";
import { formatAge } from "../utils/utils";


const PetCardBrief: React.FC<{
    petItem: IPet;
}> = ({ petItem }) => {
    return (
        <>
          {petItem.images_url?.[0] ? (
              <img
                  className="pets-section__pet-img"
                  src={petItem.images_url[0]}
                  alt={petItem.name || "Pet image"}
              />
          ) : (
              <div className="placeholder">Изображение недоступно</div>
          )}
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