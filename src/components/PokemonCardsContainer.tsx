import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PokemonCard from './PokemonCard';
import {colors} from '../constants/colors';

const PokemonCardsContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any>([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getPokemons(), []);

  const getPokemons = () => {
    if (!isLoading && !isListEnd) {
      setIsLoading(true);
      fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        .then(data => data.json())
        .then(pokemonData => {
          if (pokemonData.results.length > 0) {
            setOffset(offset + 1);
            setPokemons([...pokemons, ...pokemonData.results]);
            setIsLoading(false);
          } else {
            setIsListEnd(true);
            setIsLoading(false);
          }
        })
        .catch(e => console.error(e));
    }
  };

  const renderFooter = () => {
    return (
      <View>
        {isLoading && (
          <ActivityIndicator color={colors.darkGrey} size={'large'} />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(pokemon, index) => index.toString()}
      renderItem={pokemon => {
        return (
          <PokemonCard pokemon={pokemon.item} pokemonId={pokemon.index + 1} />
        );
      }}
      ListFooterComponent={renderFooter}
      onEndReached={getPokemons}
      onEndReachedThreshold={0.7}
      style={styles.container}
    />
  );
};

export default PokemonCardsContainer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
