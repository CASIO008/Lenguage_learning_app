import React, { createContext, useContext } from 'react';
import { useStudySession } from '../hooks/useStudySession';

const StudyContext = createContext();

export const StudyProvider = ({ children }) => {
  const studySession = useStudySession();

  return (
    <StudyContext.Provider value={studySession}>
      {children}
    </StudyContext.Provider>
  );
};

export const useStudyContext = () => useContext(StudyContext);
