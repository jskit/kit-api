// server.js
import express from 'express'
import schema from './schema'

import { graphql } from 'graphql'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

// Parse post content as text
app.use(bodyParser.text({ type: 'application/graphql' }))

app.post('/graphql', (req, res) => {
  // GraphQL executor
  graphql(schema, req.body)
    .then((result) => {
      res.send(JSON.stringify(result, null, 2))
    })
})

const server = app.listen(PORT, () => {
  const { host, port } = server.address()

  console.log('GraphQL listening at http://%s:%s', host, port)
})
