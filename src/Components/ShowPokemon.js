import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
const ShowPokemon = (props) => {
  let PokemonDetail = [props?.route?.params?.details] || [];
  PokemonDetail = JSON.stringify(PokemonDetail).slice(0, 5000);
  return (
    <View style={Styles.container}>
      <ScrollView>
        {/* show pokemon details due to large amount of data i have displayed in ScrollView*/}

        <View>
          <Text>{PokemonDetail}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: Dimensions.get('window').height,
  },
});
export default ShowPokemon;
