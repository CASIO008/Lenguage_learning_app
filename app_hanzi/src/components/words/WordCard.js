import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WordCard = ({ word, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.hanzi}>{word.hanzi}</Text>
      <Text style={styles.pinyin}>{word.pinyin}</Text>
      <Text style={styles.translation}>{word.translation}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  hanzi: { fontSize: 24, fontWeight: 'bold' },
  pinyin: { fontSize: 16, color: '#666', fontStyle: 'italic' },
  translation: { fontSize: 14, color: '#999', marginTop: 4 },
});

export default WordCard;
