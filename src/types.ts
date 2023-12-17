export type StatType = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type MoveType = {
  move: {
    name: string;
    url: string;
  };
};

export type PokemonDetails = {
  stats: Array<StatType>;
  types: Array<Type>;
  moves: Array<MoveType>;
};

export type ProccessedPokemonDetailsObj = {
  [key: string]: any;
};
