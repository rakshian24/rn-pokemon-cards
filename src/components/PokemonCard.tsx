/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import React, {useEffect, useState} from 'react';
import {colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {processPokemonDetails} from '../utils/pokemon';
import {ProccessedPokemonDetailsObj} from '../types';

interface Pokemon {
  name: string;
}

type Props = {
  pokemon: Pokemon;
  pokemonId: number;
};

const PokemonCard = ({pokemon, pokemonId}: Props) => {
  const [pokemonDetails, setPokemonDetails] =
    useState<ProccessedPokemonDetailsObj>();
  const {name} = pokemon;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(data => data.json())
      .then(pokemonData => {
        const processedPokemonDetails = processPokemonDetails(pokemonData);
        setPokemonDetails(processedPokemonDetails);
      });
  }, [pokemonId]);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{`${pokemonId}. ${name}`}</Text>
        </View>
        <View style={styles.headerRightContainer}>
          <View>
            <Icon
              name="heart"
              size={20}
              color={colors.red}
              style={{marginRight: 4}}
            />
          </View>
          <View style={styles.headerRightTextContainer}>
            <Text style={styles.headerRightText}>HP: </Text>
            <Text style={styles.headerRightText}>{pokemonDetails?.hp}</Text>
          </View>
        </View>
      </View>

      <View style={styles.imageContentWrapper}>
        <View style={styles.imageContainer}>
          <SvgUri
            width={'50%'}
            uri={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            style={{marginBottom: 10}}
          />
        </View>

        <View style={styles.pokemonTypeView}>
          <Text style={styles.pokemonTypeText}>{pokemonDetails?.type}</Text>
        </View>
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.contentHeader}>
          Moves: <Text style={styles.contentText}>{pokemonDetails?.moves}</Text>
        </Text>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4,

    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightTextContainer: {
    flexDirection: 'row',
  },
  headerRightText: {
    fontSize: 18,
    fontWeight: '500',
  },
  imageContentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 200,
    minHeight: 200,
  },
  pokemonTypeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  pokemonTypeText: {
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  contentWrapper: {
    marginBottom: 16,
    marginTop: 16,
  },
  contentHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
