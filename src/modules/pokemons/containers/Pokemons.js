import React from "react";
import Pokemons from "../components/Pokemons";
import { Query } from "react-apollo";
import gpl from "graphql-tag";

const getPokemons = gpl`
query getPokemons($first: Int!) {
  pokemons(first: $first) {
    id
    number
    name
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}`;

function Container(props) {
  return (
    <Query
      query={getPokemons}
      variables={{ first: 1 }}
      fetchPolicy="network-only"
    >
      {({ data, loading, error }) =>
        console.log(data) || (
          <Pokemons
            pokemons={data && data.pokemons}
            loading={loading}
            error={error}
            {...props}
          />
        )
      }
    </Query>
  );
}

export default Container;
