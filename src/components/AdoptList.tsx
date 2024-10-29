import axios from 'axios';
import IPet from '../interfaces/IPet';
import PetCardBrief from './PetCardBrief';
import { useEffect, useState } from 'react';
import { usePet } from '../context/PetContext';
import { useNavigate } from 'react-router-dom';

type AdoptListProps = {
   
};


export const AdoptList: React.FC<AdoptListProps> = () => {
    const [pets, setPets] = useState<IPet[]>([]);
    const { setSelectedPet } = usePet();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchPets = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get<IPet[]>('http://localhost:8080/api/pet');              
                setPets(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPets(); 
    }, []);

    const handlePetClick = (pet: IPet) => {
        setSelectedPet(pet); // Устанавливаем питомца в контекст
        localStorage.setItem('selectedPet', JSON.stringify(pet));
        navigate(`/adopt/${pet.name}`);
    };
    

    return (   
        isLoading ? <div>Загрузка...</div> :  
        <section className="pets-section wrap">
            <div className="pets-section__filter-cont">
                <ul className="pets-section__type-filter">
                    <li className="pets-section__type-filter-item pets-section__type-filter-item--active">Все</li>
                    <li className="pets-section__type-filter-item">Кошки</li>
                    <li className="pets-section__type-filter-item">Собаки</li>
                </ul>
            <div className="pets-section__filter-button">Фильтры</div>           
            </div>
            <ul className="pets-section__pets-list">
                {pets?.map(pet => (
                    <li className="pets-section__pet-item" key={pet.id} onClick={() => handlePetClick(pet)}>
                        <PetCardBrief petItem={pet} />
                    </li>
                ))}
            </ul>
        </section>  
    );
};