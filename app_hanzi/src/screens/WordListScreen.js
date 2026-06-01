import React from 'react';
import { View } from 'react-native';
import WordList from '../components/words/WordList';

const WordListScreen = ({ navigation }) => {
  const words = [];

  return (
    <View style={{ flex: 1 }}>
      <WordList words={words} onWordPress={(word) => navigation.navigate('WordDetail', { word })} />
    </View>
  );
};

export default WordListScreen;
