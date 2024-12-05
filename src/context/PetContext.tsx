import React, { createContext, useContext, useState, useEffect } from 'react';
import IPet from '../interfaces/IPet';
import apiClient from '../api/axiosConfig';

interface PetContextProps {
	pets: IPet[];
}

const PetContext = createContext<PetContextProps | undefined>(undefined);

export const PetProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [pets, setPets] = useState<IPet[]>([]);

	useEffect(() => {
		const fetchPets = async () => {
			try {
				const response = await apiClient.get('/pet');
				setPets(response.data);
			} catch (error) {
				console.error('Error fetching pets:', error);
			}
		};

		fetchPets();
	}, []);

	return <PetContext.Provider value={{ pets }}>{children}</PetContext.Provider>;
};

export const usePet = () => {
	const context = useContext(PetContext);
	if (!context) {
		throw new Error('usePet must be used within a PetProvider');
	}
	return context;
};
