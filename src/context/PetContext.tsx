import React, { createContext, useContext, useState, ReactNode } from 'react';
import IPet from '../interfaces/IPet';

type PetContextType = {
    selectedPet: IPet | null;
    setSelectedPet: (pet: IPet | null) => void;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

export const PetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedPet, setSelectedPet] = useState<IPet | null>(null);

    return (
        <PetContext.Provider value={{ selectedPet, setSelectedPet }}>
            {children}
        </PetContext.Provider>
    );
};

export const usePet = () => {
    const context = useContext(PetContext);
    if (!context) {
        throw new Error('usePet must be used within a PetProvider');
    }
    return context;
};
