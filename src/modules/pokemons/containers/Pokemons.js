import React from "react";
import Pokemons from "../components/Pokemons";
import { Query } from "react-apollo";
import { getPokemons } from "../queries";

function Container(props) {
  return (
    <Query
      query={getPokemons}
      variables={{ first: 151 }}
      fetchPolicy="network-only"
    >
      {({ data, loading, error }) => (
        <Pokemons
          pokemons={data && data.pokemons}
          loading={loading}
          error={error}
          {...props}
        />
      )}
    </Query>
  );
}

export default Container;
