import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import PokemonCard from './PokemonCard';

const PokemonCardsContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(data => data.json())
      .then(pokemonData => setPokemons(pokemonData.results));
  }, []);
  return (
    <ScrollView style={styles.container}>
      {pokemons.length > 0 &&
        pokemons.map((pokemon, index) => {
          return (
            <PokemonCard key={index} pokemon={pokemon} pokemonId={index + 1} />
          );
        })}
    </ScrollView>
  );
};

export default PokemonCardsContainer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
