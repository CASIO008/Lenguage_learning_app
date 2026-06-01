import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { WordRepository } from '../database/repositories/WordRepository';

export default function HomeScreen({ navigation }) {
  const [todayWords, setTodayWords] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    mastered: 0,
    learning: 0
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const words = await WordRepository.getWordsForReview(10);
      setTodayWords(words);
      
      // Carregar estatísticas
      const allWords = await WordRepository.getAll();
      setStats({
        total: allWords.length,
        mastered: allWords.filter(w => w.status === 'mastered').length,
        learning: allWords.filter(w => w.status === 'learning').length
      });
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Aprenda Chinês</Text>
        <Text style={styles.subtitle}>Continue seus estudos</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.total}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.learning}</Text>
          <Text style={styles.statLabel}>Aprendendo</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.mastered}</Text>
          <Text style={styles.statLabel}>Dominado</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.studyButton}
        onPress={() => navigation.navigate('Study')}
      >
        <Text style={styles.studyButtonText}>Começar a Estudar</Text>
        <Text style={styles.studyButtonSubtext}>
          {todayWords.length} palavras para revisar hoje
        </Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hoje</Text>
        {todayWords.slice(0, 3).map((word, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.wordItem}
            onPress={() => navigation.navigate('WordDetail', { word })}
          >
            <Text style={styles.chineseChar}>{word.simplified}</Text>
            <View style={styles.wordInfo}>
              <Text style={styles.pinyin}>{word.pinyin}</Text>
              <Text style={styles.meaning}>{word.meaning_pt}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#e74c3c',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: '#ecf0f1',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  statCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    flex: 1,
    margin: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
  },
  studyButton: {
    backgroundColor: '#2ecc71',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  studyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wordItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  chineseChar: {
    fontSize: 24,
    marginRight: 15,
  },
  wordInfo: {
    flex: 1,
  },
  pinyin: {
    fontSize: 14,
    color: '#e74c3c',
  },
  meaning: {
    fontSize: 16,
    marginTop: 3,
  },
});