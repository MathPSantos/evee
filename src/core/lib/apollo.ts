import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ojp25p0bp501xk6y5acsfv/master",
  cache: new InMemoryCache(),
});
