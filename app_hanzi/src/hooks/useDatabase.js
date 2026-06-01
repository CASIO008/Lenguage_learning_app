import { useState, useEffect } from 'react';
import { runMigrations } from '../database/migrations';
import { seedData } from '../database/seedData';

export const useDatabase = () => {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      runMigrations();
      seedData();
      setReady(true);
    } catch (e) {
      setError(e);
    }
  }, []);

  return { ready, error };
};
