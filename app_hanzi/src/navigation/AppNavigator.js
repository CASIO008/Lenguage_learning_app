import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WordListScreen from '../screens/WordListScreen';
import WordDetailScreen from '../screens/WordDetailScreen';
import StudyScreen from '../screens/StudyScreen';
import QuizScreen from '../screens/QuizScreen';
import ProgressScreen from '../screens/ProgressScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'app_hanzi' }} />
        <Stack.Screen name="WordList" component={WordListScreen} options={{ title: 'Palavras' }} />
        <Stack.Screen name="WordDetail" component={WordDetailScreen} options={{ title: 'Detalhe' }} />
        <Stack.Screen name="Study" component={StudyScreen} options={{ title: 'Estudar' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Quiz' }} />
        <Stack.Screen name="Progress" component={ProgressScreen} options={{ title: 'Progresso' }} />
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Categorias' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
