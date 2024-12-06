import React, { createContext, useContext, useState, useEffect } from 'react';
import IPet from '../interfaces/IPet';
import apiClient from '../api/axiosConfig';

interface PetContextProps {
	pets: IPet[];
	isLoading: boolean;
}

const PetContext = createContext<PetContextProps | undefined>(undefined);

export const PetProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [pets, setPets] = useState<IPet[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPets = async () => {
			try {
				setIsLoading(true);
				const response = await apiClient.get('/pet');
				setPets(response.data);
			} catch (error) {
				console.error('Error fetching pets:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPets();
	}, []);

	return <PetContext.Provider value={{ pets, isLoading }}>{children}</PetContext.Provider>;
};

export const usePet = () => {
	const context = useContext(PetContext);
	if (!context) {
		throw new Error('usePet must be used within a PetProvider');
	}
	return context;
};
