import {PokemonDetails, ProccessedPokemonDetailsObj} from '../types';

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const processPokemonDetails = (pokemonDetails: PokemonDetails) => {
  const {stats, types, moves} = pokemonDetails;
  let processedPokemonDetailsObj: ProccessedPokemonDetailsObj = {};
  const hp = stats.filter(stat => stat.stat.name === 'hp')[0]?.base_stat;
  const movesString = moves
    .slice(0, 5)
    .map(moveObj => capitalizeFirstLetter(moveObj.move.name || ''))
    .join(', ');

  processedPokemonDetailsObj.hp = hp;
  processedPokemonDetailsObj.type = types[0]?.type?.name;
  processedPokemonDetailsObj.moves = movesString;
  return processedPokemonDetailsObj;
};
