// graphql-request：一个简单的弹性的 JavaScript GraphQL 客户端，可以运行于所有的 JavaScript 环境（浏览器，Node.js 和 React Native）—— 基本上是 fetch 的轻度封装。
// https://github.com/graphcool/graphql-request

import { request, GraphQLClient } from 'graphql-request'

const query = `{
  Movie(title: "Inception") {
    releaseDate
    actors {
      name
    }
  }
}`

request('https://api.graph.cool/simple/v1/movies', query).then(data => console.log(data))


const client = new GraphQLClient('my-endpoint', {
  headers: {
    Authorization: 'Bearer my-jwt-token',
  },
})

const query = `{
  Movie(title: "Inception") {
    releaseDate
    actors {
      name
    }
  }
}`

client.request(query).then(data => console.log(data))
