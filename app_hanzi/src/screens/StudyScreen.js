import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlashCard from '../components/study/FlashCard';
import ProgressBar from '../components/study/ProgressBar';

const StudyScreen = () => {
  const [index, setIndex] = useState(0);
  const words = [];

  return (
    <View style={styles.container}>
      <ProgressBar progress={words.length ? (index + 1) / words.length : 0} />
      {words.length > 0 ? (
        <FlashCard word={words[index]} onSwipe={() => setIndex((i) => Math.min(i + 1, words.length - 1))} />
      ) : (
        <Text>Nenhuma palavra para estudar.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
});

export default StudyScreen;
