import React, { createContext, useContext, useState, useEffect } from 'react';
import { initDatabase } from '../database/database';
import { seedInitialData } from '../database/seedData';

const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    initializeDB();
  }, []);

  const initializeDB = async () => {
    try {
      await initDatabase();
      await seedInitialData(); // Dados iniciais (HSK 1, etc)
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <DatabaseContext.Provider value={{ error }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => useContext(DatabaseContext);