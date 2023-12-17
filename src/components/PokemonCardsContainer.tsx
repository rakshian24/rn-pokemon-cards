import {StyleSheet, View} from 'react-native';
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonCardsContainer = () => {
  //   const cardsData = [
  //     {
  //       name: 'Bulbasaur',
  //       hp: 45,
  //       moves: ['razor-wind', 'swords-dance', 'cut', 'bind', 'vine-whip'],
  //       weaknesses: ['rock', 'steel'],
  //     },
  //   ];
  return (
    <View style={styles.container}>
      <PokemonCard />
    </View>
  );
};

export default PokemonCardsContainer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
