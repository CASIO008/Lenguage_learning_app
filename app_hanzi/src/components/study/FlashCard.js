import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FlashCard = ({ word, onSwipe }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setFlipped(!flipped)}>
      {flipped ? (
        <View>
          <Text style={styles.pinyin}>{word.pinyin}</Text>
          <Text style={styles.translation}>{word.translation}</Text>
        </View>
      ) : (
        <Text style={styles.hanzi}>{word.hanzi}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 40,
    margin: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  hanzi: { fontSize: 48, fontWeight: 'bold' },
  pinyin: { fontSize: 20, color: '#666', fontStyle: 'italic' },
  translation: { fontSize: 18, marginTop: 8 },
});

export default FlashCard;
