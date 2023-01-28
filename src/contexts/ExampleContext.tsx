import { createContext, FC, PropsWithChildren, useContext } from 'react';

export interface ExampleContextState {}

export const initialState = {};

export const ExampleContext = createContext<ExampleContextState>(initialState);

const ExampleProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ExampleContext.Provider value={{}}>{children}</ExampleContext.Provider>;
};

export const useExampleContext = () => {
  const context = useContext(ExampleContext);

  if (!context) {
    throw Error('useExampleContext must be used inside an ExampleProvider');
  }

  return context;
};

export default ExampleProvider;
