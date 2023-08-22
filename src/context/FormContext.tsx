import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormContextValue {
  footage: number;
  roomsAmount: number;
  handleAmountInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumberChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDefault: any
}

const FormContext = createContext<FormContextValue | undefined>(undefined);

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContextProvider: React.FC<FormContextProviderProps> = ({ children }) => {
  const [footage, setFootage] = useState(0);
  const [roomsAmount, setRoomsAmount] = useState(1);

  const handleAmountInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setFootage(newValue);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newNumber = parseInt(event.target.value, 10);
    setRoomsAmount(newNumber);
  };

  const handleDefault = () => {
    setFootage(0);
    setRoomsAmount(1);
  }

  const value: FormContextValue = {
    footage,
    roomsAmount,
    handleAmountInputChange,
    handleNumberChange,
    handleDefault
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};