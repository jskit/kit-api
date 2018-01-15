
// Apollo Client (github)：一个强大的 JavaScript GraphQL 客户端，设计用于与 React、React Native、Angular 2 或者原生 JavaScript 一同工作。
// https://github.com/apollographql/apollo-client

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql.example.com' }),
  cache: new InMemoryCache(),
})
