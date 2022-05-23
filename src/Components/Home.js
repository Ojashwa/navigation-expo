import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const Home = ({ navigation }) => {
  const [pokemon, setPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const handleSubmit = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(async (response) => {
        await setPokemonDetails(response);
        navigation.navigate('ShowPokemon', { details: pokemonDetails });
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
  return (
    <View style={Style.homeContainer}>
      <Text style={{ marginBottom: 20 }}>This is homepage</Text>
      <View style={{ marginBottom: 30 }}>
        <TextInput
          onChangeText={(text) => {
            setPokemon(text);
          }}
          value={pokemon}
          Style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          placeholder={'Enter Pokemon'}
        />
      </View>
      <Button title="click me" onPress={handleSubmit} />
    </View>
  );
};

const Style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
export default Home;
