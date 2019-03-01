import JWT from "jwt-client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink
} from "apollo-boost";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${JWT.get()}`
      }
    });
    return forward(operation);
  }).concat(
    new HttpLink({
      uri: "https://graphql-pokemon.now.sh"
    })
  )
});
