import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Pokemon from "../components/Pokemon";
import { getPokemonById } from "../queries";

function Container({ match }) {
  return (
    <Query
      query={getPokemonById}
      variables={{ id: match.params.id }}
      fetchPolicy="network-only"
    >
      {({ data, loading, error }) => (
        <Pokemon
          pokemon={data && data.pokemon}
          loading={loading}
          error={error}
        />
      )}
    </Query>
  );
}

Container.propTypes = {
  match: PropTypes.object.isRequired
};

export default Container;
