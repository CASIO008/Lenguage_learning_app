import { useState, useEffect } from 'react';
import WordRepository from '../database/repositories/WordRepository';

export const useWords = (categoryId) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = categoryId
      ? WordRepository.getByCategory(categoryId)
      : WordRepository.getAll();
    setWords(data);
    setLoading(false);
  }, [categoryId]);

  return { words, loading };
};
