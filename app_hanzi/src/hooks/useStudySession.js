import { useState } from 'react';
import UserProgressRepository from '../database/repositories/UserProgressRepository';
import { calculateNextReview } from '../services/spacedRepetition';

export const useStudySession = () => {
  const [dueWords, setDueWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadDueWords = () => {
    const words = UserProgressRepository.getDueReviews();
    setDueWords(words);
    setCurrentIndex(0);
  };

  const rateWord = (quality) => {
    const word = dueWords[currentIndex];
    if (!word) return;

    const next = calculateNextReview(word, quality);
    UserProgressRepository.upsert({ word_id: word.word_id, ...next });

    if (currentIndex < dueWords.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  return { dueWords, currentIndex, loadDueWords, rateWord };
};
