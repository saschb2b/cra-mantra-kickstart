import React from "react";
import Pokemon from "../components/Pokemon";
import { Query } from "react-apollo";
import { getPokemonById } from "../queries";

function Container(props) {
  return (
    <Query
      query={getPokemonById}
      variables={{ id: "UG9rZW1vbjowMDE=" }}
      fetchPolicy="network-only"
    >
      {({ data, loading, error }) => (
        <Pokemon
          pokemon={data && data.pokemon}
          loading={loading}
          error={error}
          {...props}
        />
      )}
    </Query>
  );
}

export default Container;
