const { projects, clients } = require("../sampleData");
const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const ClientType = new GraphQLObjectType({
  name: "client",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    type: ClientType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return clients.find((client) => client.id === args.id);
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
