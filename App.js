import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from './src/Components/MyStack';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
