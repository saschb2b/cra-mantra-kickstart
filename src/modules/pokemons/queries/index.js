import { loader } from "graphql.macro";

export const getPokemonById = loader("./getPokemonById.graphql");
export const getPokemons = loader("./getPokemons.graphql");
