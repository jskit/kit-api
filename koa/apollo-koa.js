import Koa from 'koa' // koa@2
import KoaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import { graphqlKoa } from 'apollo-server-koa'
import opn from 'opn'
import myGraphQLSchema from './myGraphQLSchema'

const app = new Koa()
const router = new KoaRouter()
const PORT = 3000

// koaBody is needed just for POST.
app.use(koaBody())

router.post('/graphql', graphqlKoa({ schema: myGraphQLSchema }))
router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }))

app.use(router.routes())
app.use(router.allowedMethods())
// app.listen(PORT, () => {
//   console.log(`listen`)
// })

// const uri = `http://localhost:${PORT}`
const uri = `http://127.0.0.1:${PORT}`

const readyPromise = new Promise(resolve => resolve)

console.log('> Starting dev server...')
const server = app.listen(PORT, () => {
  console.log(`Koa listening at ${uri}`)
  opn(uri)
})

export default {
  ready: readyPromise,
  close: () => {
    server.close()
  },
}
