import axios from 'axios';
import IPet from '../interfaces/IPet';
import PetCartBrief from './PetCartBrief';
import { useEffect, useState } from 'react';

type AdoptListProps = {
    maxLength: number;
};

type User = {
    id: number,
    name: string,
}

export const AdoptList: React.FC<AdoptListProps> = ({ maxLength }) => {
    const [pets, setPets] = useState<IPet[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUsers = async () => {
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

        fetchUsers(); 
    }, []);
    

    return (
        
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
                {pets?.map(pet => <PetCartBrief key={pet.id} petItem={pet} />)}
            </ul>
        </section>
        
    );
};