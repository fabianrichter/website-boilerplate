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
  // EZ Forms
  ezforms: {
    config: {
      captchaProvider: {
        name: "none",
      },
      notificationProviders: [],
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
