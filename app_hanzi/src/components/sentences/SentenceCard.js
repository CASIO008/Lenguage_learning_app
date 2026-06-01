import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SentenceCard = ({ sentence }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.chinese}>{sentence.chinese}</Text>
      <Text style={styles.pinyin}>{sentence.pinyin}</Text>
      <Text style={styles.translation}>{sentence.translation}</Text>
    </View>
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
  chinese: { fontSize: 22, fontWeight: 'bold' },
  pinyin: { fontSize: 15, color: '#666', fontStyle: 'italic' },
  translation: { fontSize: 14, color: '#999', marginTop: 4 },
});

export default SentenceCard;
