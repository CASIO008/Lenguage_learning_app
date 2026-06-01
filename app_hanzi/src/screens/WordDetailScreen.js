import React from 'react';
import { ScrollView } from 'react-native';
import WordDetail from '../components/words/WordDetail';

const WordDetailScreen = ({ route }) => {
  const { word } = route.params;

  return (
    <ScrollView>
      <WordDetail word={word} />
    </ScrollView>
  );
};

export default WordDetailScreen;
