import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QuizOption from '../components/study/QuizOption';
import ProgressBar from '../components/study/ProgressBar';

const QuizScreen = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const questions = [];

  return (
    <View style={styles.container}>
      <ProgressBar progress={questions.length ? (current + 1) / questions.length : 0} />
      {questions.length > 0 ? (
        <View>
          <Text style={styles.question}>{questions[current]?.question}</Text>
          {questions[current]?.options.map((opt, i) => (
            <QuizOption
              key={i}
              text={opt}
              onPress={() => setSelected(i)}
              isCorrect={i === questions[current].correct}
              selected={selected === i}
            />
          ))}
        </View>
      ) : (
        <Text>Nenhuma pergunta disponível.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  question: { fontSize: 22, textAlign: 'center', margin: 20 },
});

export default QuizScreen;
