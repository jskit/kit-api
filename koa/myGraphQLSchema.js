
// myGraphQLSchema

import { makeExecutableSchema } from 'graphql-tools'
// import { buildSchema } from 'graphql'

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)


// ... define or import your schema here!
const typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`]

/* eslint no-unused-vars: 0 */
const resolvers = {
  Query: {
    hello(root) {
      return 'world'
    },
  },
}
const myGraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default myGraphQLSchema
