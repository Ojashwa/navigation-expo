import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ShowPokemon from './ShowPokemon';

const MyStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ShowPokemon" component={ShowPokemon} />
    </Stack.Navigator>
  );
};
export default MyStack;
