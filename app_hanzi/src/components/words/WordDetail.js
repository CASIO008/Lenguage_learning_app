import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WordDetail = ({ word }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.hanzi}>{word.hanzi}</Text>
      <Text style={styles.pinyin}>{word.pinyin}</Text>
      <Text style={styles.translation}>{word.translation}</Text>
      {word.examples && word.examples.map((ex, i) => (
        <View key={i} style={styles.example}>
          <Text>{ex.hanzi}</Text>
          <Text>{ex.translation}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  hanzi: { fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
  pinyin: { fontSize: 18, color: '#666', textAlign: 'center', fontStyle: 'italic' },
  translation: { fontSize: 16, textAlign: 'center', marginVertical: 12 },
  example: { marginTop: 8 },
});

export default WordDetail;
