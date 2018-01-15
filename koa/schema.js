
// schema.js
// http://graphql.cn/code/#javascript

// import { graphql, buildSchema } from 'graphql'

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// var root = { hello: () => 'Hello world!' };

// graphql(schema, '{ hello }', root).then((response) => {
//   console.log(response);
// });

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} from 'graphql'

const count = 0

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve() {
          return count
        },
      },
    },
  }),
})

export default schema

