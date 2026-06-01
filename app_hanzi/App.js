import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DatabaseProvider } from './src/context/DatabaseContext';
import { StudyProvider } from './src/context/StudyContext';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <DatabaseProvider>
      <StudyProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <AppNavigator />
        </NavigationContainer>
      </StudyProvider>
    </DatabaseProvider>
  );
}