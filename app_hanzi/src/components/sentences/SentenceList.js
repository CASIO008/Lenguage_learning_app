import React from 'react';
import { FlatList } from 'react-native';
import SentenceCard from './SentenceCard';

const SentenceList = ({ sentences }) => {
  return (
    <FlatList
      data={sentences}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <SentenceCard sentence={item} />}
    />
  );
};

export default SentenceList;
