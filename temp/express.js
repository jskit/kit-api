import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import myGraphQLSchema from './myGraphQLSchema'

const PORT = 3000

const app = express()

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }))

app.listen(PORT)

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}))

app.listen(PORT, () => {
  console.log(`Now browse to localhost:${PORT}/graphiql`)
})
