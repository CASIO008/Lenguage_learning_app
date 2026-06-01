import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const QuizOption = ({ text, onPress, isCorrect, selected }) => {
  const bgColor = selected
    ? isCorrect ? '#4CAF50' : '#F44336'
    : '#fff';

  return (
    <TouchableOpacity
      style={[styles.option, { backgroundColor: bgColor }]}
      onPress={onPress}
      disabled={selected}
    >
      <Text style={[styles.text, selected && { color: '#fff' }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: { fontSize: 16 },
});

export default QuizOption;
