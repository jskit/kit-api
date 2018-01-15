
<!-- http://graphql.cn/code/#javascript -->

JavaScript
GraphQL.js (github) (npm)
GraphQL 规范的参考实现，设计用于在 Node.js 环境中运行。

如果要在命令行中运行一个 GraphQL.js 的 hello world 脚本：

npm install graphql
然后使用 node hello.js 以运行 hello.js 中的代码：

var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
express-graphql (github) (npm)
基于 Express webserver 服务器的一个 GraphQL API 服务端参考实现，你可以用它结合常规 Express webserver 来运行 GraphQL，也可以作为独立 GraphQL 服务器。

如果要运行 express-graphql 的 hello world 服务器：

npm install express express-graphql graphql
然后使用 node server.js 以运行 server.js 中的代码：

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
apollo-server (github) (npm)
来自于 Apollo 的一套 GraphQL server 包，可用于多种 Node.js HTTP 框架（Express，Connect，Hapi，Koa 等）。

如果要运行 apollo-server-express 的 hello world 服务器：

npm install apollo-server-express body-parser express graphql graphql-tools
然后使用 node server.js 以运行 server.js 中的代码：

var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');

var typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

var resolvers = {
  Query: {
    hello(root) {
      return 'world';
    }
  }
};

var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
Apollo Server 也支持所有的 Node.js HTTP 服务器框架：Express、Connect、HAPI 和 Koa。
