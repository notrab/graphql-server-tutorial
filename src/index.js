const { GraphQLServer } = require('graphql-yoga')

const db = require('./db')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db
  })
})

server.start(() => console.log('Server is running on localhost:4000'))
