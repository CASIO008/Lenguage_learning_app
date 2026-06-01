import React from 'react';
import { FlatList } from 'react-native';
import WordCard from './WordCard';

const WordList = ({ words, onWordPress }) => {
  return (
    <FlatList
      data={words}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <WordCard word={item} onPress={() => onWordPress(item)} />
      )}
    />
  );
};

export default WordList;
