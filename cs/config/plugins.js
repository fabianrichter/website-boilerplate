module.exports = {
  // Navigation
  navigation: {
    enabled: true,
    config: {
      gql: {
        navigationItemRelated: ["Page", "Article", "Event"],
      },
    },
  },
  // GraphQL
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
